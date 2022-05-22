import { DateResolver } from './DateResolver';
import { JSONResolver } from './JSONResolver';
import { MutationResolver } from './MutationResolver';
import { ProductResolver } from './ProductResolver';
import { QueryResolver } from './QueryResolver';
import { ReviewResolver } from './ReviewResolver';
import { TimestampResolver } from './TimestampResolver';
import { UserResolver } from './UserResolver';

export const resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,

  Product: ProductResolver,
  Review: ReviewResolver,
  User: UserResolver,

  Date: DateResolver,
  JSON: JSONResolver,
  Timestamp: TimestampResolver
};
