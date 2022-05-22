import { DateResolver } from './DateResolver';
import { JSONResolver } from './JSONResolver';
import { MutationResolver } from './MutationResolver';
import { ProductResolver } from './ProductResolver';
import { QueryResolver } from './QueryResolver';
import { TimestampResolver } from './TimestampResolver';

export const resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,

  Product: ProductResolver,

  Date: DateResolver,
  JSON: JSONResolver,
  Timestamp: TimestampResolver
};
