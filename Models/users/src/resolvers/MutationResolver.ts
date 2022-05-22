import { User } from '../entities';

export const MutationResolver = {
  createUser: async (parent: any, args: any, context: any): Promise<User> => {
    return null;
  }
};
