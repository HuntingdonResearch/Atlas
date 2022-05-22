import express from 'express';

import { graphQLRoutes } from './graphql';
import { statusRoutes } from './status';

export const routes = express.Router();

routes.use('/graphql', graphQLRoutes);
routes.use('/status', statusRoutes);
