import { DateResolver } from './DateResolver';
import { JSONResolver } from './JSONResolver';
import { MutationResolver } from './MutationResolver';
import { QueryResolver } from './QueryResolver';
import { TimestampResolver } from './TimestampResolver';
import { UserResolver } from './UserResolver';

export const resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,

  User: UserResolver,

  Date: DateResolver,
  JSON: JSONResolver,
  Timestamp: TimestampResolver
};
