export * from './Product';
export * from './Review';
export * from './User';

import { Product } from './Product';
import { Review } from './Review';
import { User } from './User';

export const entities = [
  Product,
  Review,
  User
];
