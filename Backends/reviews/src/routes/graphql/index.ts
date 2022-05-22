import { Router } from 'express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { createApolloContext } from '@atlas/core-library';
import { resolvers, typeDefs } from '@atlas/reviews-model';

export const graphQLRoutes: Router = Router();

const apolloServer: ApolloServer = new ApolloServer({
  schema: buildSubgraphSchema({
    resolvers,
    typeDefs
  }),
  context: createApolloContext,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
    })
  ]
});

apolloServer.start().then(() => {
  graphQLRoutes.use(
      apolloServer.getMiddleware({
        path: '/'
      })
  );
});
