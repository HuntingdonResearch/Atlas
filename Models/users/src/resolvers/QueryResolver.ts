import { User } from '../entities';

export const QueryResolver = {
  getUser: async (parent: any, args: any, context: any): Promise<User> => {
    return null;
  }
};
