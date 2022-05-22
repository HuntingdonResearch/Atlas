import { normalizePort, ServiceItem } from '@atlas/core-library';

export const PORT: number | string | false = normalizePort(
  process.env.PORT || '4000'
);

export const SERVICE_CHECK_RETRY_COUNT: number = 10;

export const SERVICE_LIST: ServiceItem[] = [
  {
    name: 'users',
    urls: {
      status: process.env.USERS_BACKEND_STATUS_ENDPOINT_URL || 'http://localhost:4001/status',
      graphQL: process.env.USERS_BACKEND_GRAPHQL_ENDPOINT_URL || 'http://localhost:4001/graphql'
    }
  },
  {
    name: 'products',
    urls: {
      status: process.env.PRODUCTS_BACKEND_STATUS_ENDPOINT_URL || 'http://localhost:4002/status',
      graphQL: process.env.PRODUCTS_BACKEND_GRAPHQL_ENDPOINT_URL || 'http://localhost:4002/graphql'
    }
  },
  {
    name: 'orders',
    urls: {
      status: process.env.USERS_BACKEND_STATUS_ENDPOINT_URL || 'http://localhost:4003/status',
      graphQL: process.env.USERS_BACKEND_GRAPHQL_ENDPOINT_URL || 'http://localhost:4003/graphql'
    }
  },
  {
    name: 'reviews',
    urls: {
      status: process.env.USERS_BACKEND_STATUS_ENDPOINT_URL || 'http://localhost:4004/status',
      graphQL: process.env.USERS_BACKEND_GRAPHQL_ENDPOINT_URL || 'http://localhost:4004/graphql'
    }
  }
];
