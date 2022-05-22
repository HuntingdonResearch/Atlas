import { Product, User } from '../entities';

export const ReviewResolver = {
  product: async (parent: any, args: any, context: any): Promise<Product> => {
    return null;
  },

  user: async (parent: any, args: any, context: any): Promise<User> => {
    return null;
  }
};
