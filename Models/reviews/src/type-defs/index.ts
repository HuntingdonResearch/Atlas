import { DocumentNode } from 'graphql';
import { mergeTypeDefs } from '@graphql-tools/merge';

import { Query } from './Query';
import { Mutation } from './Mutation';

import { Product } from './Product';
import { Review } from './Review';
import { User } from './User';

import { ReviewInput } from './ReviewInput';
import { ReviewRef } from './ReviewRef';

import { Date } from './Date';
import { JSON } from './JSON';
import { Timestamp } from './Timestamp';

const types = [
  Query,
  Mutation,
  Product,
  Review,
  ReviewInput,
  ReviewRef,
  User,
  Date,
  JSON,
  Timestamp
];

export const typeDefs: DocumentNode = mergeTypeDefs(types);
