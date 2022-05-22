import { DateResolver } from './DateResolver';
import { JSONResolver } from './JSONResolver';
import { LineResolver } from './LineResolver';
import { MutationResolver } from './MutationResolver';
import { OrderResolver } from './OrderResolver';
import { ProductResolver } from './ProductResolver';
import { QueryResolver } from './QueryResolver';
import { TimestampResolver } from './TimestampResolver';
import { UserResolver } from './UserResolver';

export const resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,

  Line: LineResolver,
  Order: OrderResolver,
  Product: ProductResolver,
  User: UserResolver,

  Date: DateResolver,
  JSON: JSONResolver,
  Timestamp: TimestampResolver
};
