import { DocumentNode } from 'graphql';
import { mergeTypeDefs } from '@graphql-tools/merge';

import { Query } from './Query';
import { Mutation } from './Mutation';

import { Product } from './Product';

import { Date } from './Date';
import { JSON } from './JSON';
import { Timestamp } from './Timestamp';

const types = [
  Query,
  Mutation,
  Product,
  Date,
  JSON,
  Timestamp
];

export const typeDefs: DocumentNode = mergeTypeDefs(types);
