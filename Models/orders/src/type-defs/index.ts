import { DocumentNode } from 'graphql';
import { mergeTypeDefs } from '@graphql-tools/merge';

import { Query } from './Query';
import { Mutation } from './Mutation';

import { Line } from './Line';
import { Order } from './Order';
import { Product } from './Product';
import { User } from './User';

import { LineInput } from './LineInput';
import { LineRef } from './LineRef';
import { OrderInput } from './OrderInput';
import { OrderRef } from './OrderRef';

import { Date } from './Date';
import { JSON } from './JSON';
import { Timestamp } from './Timestamp';

const types = [
  Query,
  Mutation,
  Line,
  Order,
  Product,
  User,
  LineInput,
  LineRef,
  OrderInput,
  OrderRef,
  Date,
  JSON,
  Timestamp
];

export const typeDefs: DocumentNode = mergeTypeDefs(types);
