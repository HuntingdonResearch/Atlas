import { Router } from 'express';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import fetch from 'node-fetch';
import { createApolloContext } from '@atlas/core-library';
import { SERVICE_CHECK_RETRY_COUNT, SERVICE_LIST } from '../../config';

export const graphQLRoutes: Router = Router();

async function checkService(name: string, statusURL: string): Promise<boolean> {
  try {
    const result = await fetch(statusURL);

    if (result.ok) {
      const { status }: any = await result.json();

      return status === 'ALIVE';
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function timeout(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForService(name: string, statusURL: string): Promise<void> {
  let remainingCount = SERVICE_CHECK_RETRY_COUNT;
  let isAlive = false;

  while (!isAlive && remainingCount > 0) {
    try {
      isAlive = await checkService(name, statusURL);

      await timeout(1000);
    } catch (error) {
    } finally {
      remainingCount--;
    }
  }
}

async function waitForServices(): Promise<void> {
  await Promise
    .all(
      SERVICE_LIST
        .map(async ({ name, urls }) => {
          await waitForService(name, urls.status);
        })
    );
}

async function createApolloGateway(): Promise<ApolloGateway> {
  await waitForServices();

  const apolloGateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: SERVICE_LIST
        .map(({ name, urls }) => ({
          name,
          url: urls.graphQL
        }))
    })
  });

  return apolloGateway;
}

async function createApolloServer(): Promise<ApolloServer> {
  const apolloGateway = await createApolloGateway();

  const apolloServer: ApolloServer = new ApolloServer({
    gateway: apolloGateway,
    context: createApolloContext,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({})
    ]
  });

  return apolloServer;
}

async function startApolloServer(): Promise<ApolloServer> {
  const apolloServer = await createApolloServer();

  await apolloServer.start();

  return apolloServer;
}

startApolloServer()
  .then(
    (apolloServer) => {
      graphQLRoutes.use(
        apolloServer.getMiddleware({
          path: '/'
        })
      );
    }
  );
