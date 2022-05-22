export * from './Line';
export * from './Order';
export * from './Product';
export * from './User';

import { Line } from './Line';
import { Order } from './Order';
import { Product } from './Product';
import { User } from './User';

export const entities = [
  Line,
  Order,
  Product,
  User
];
