import dayjs from 'dayjs';
import { GraphQLScalarType, ValueNode } from 'graphql';
import { Kind } from 'graphql/language';

export const DateResolver = new GraphQLScalarType({
  name: 'Date',

  description: 'Date custom scalar type',

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
