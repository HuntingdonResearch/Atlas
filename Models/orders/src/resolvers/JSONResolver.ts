import { GraphQLScalarType, ValueNode } from 'graphql';
import { Kind } from 'graphql/language';

export const JSONResolver = new GraphQLScalarType({
  name: 'JSON',

  description: 'JSON custom scalar type',

  parseValue(value: object): object {
    return value;
  },

  parseLiteral(ast: ValueNode): object {
    if (ast.kind === Kind.STRING) {
      return JSON.parse(ast.value);
    }

    return null;
  },

  serialize(value: object): object {
    return value;
  }
});
