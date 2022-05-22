import dayjs from 'dayjs';
import { GraphQLScalarType, ValueNode } from 'graphql';
import { Kind } from 'graphql/language';

export const TimestampResolver = new GraphQLScalarType({
  name: 'Timestamp',

  description: 'Timestamp custom scalar type',

  parseValue(value: string): Date {
    return dayjs(value).toDate();
  },

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(+ast.value);
    }

    return null;
  },

  serialize(value: Date): number {
    return value.getTime();
  }
});
