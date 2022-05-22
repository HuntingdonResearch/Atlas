import { Line, User } from '../entities';

export const OrderResolver = {
  lines: async (parent: any, args: any, context: any): Promise<Line[]> => {
    return [];
  },

  user: async (parent: any, args: any, context: any): Promise<User> => {
    return null;
  }
};
