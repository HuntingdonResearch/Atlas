import { DocumentNode } from 'graphql';
import { mergeTypeDefs } from '@graphql-tools/merge';

import { Query } from './Query';
import { Mutation } from './Mutation';

import { User } from './User';

import { UserInput } from './UserInput';
import { UserRef } from './UserRef';

import { Date } from './Date';
import { JSON } from './JSON';
import { Timestamp } from './Timestamp';

const types = [
  Query,
  Mutation,
  User,
  UserInput,
  UserRef,
  Date,
  JSON,
  Timestamp
];

export const typeDefs: DocumentNode = mergeTypeDefs(types);
