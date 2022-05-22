import { Review } from '../entities';

export const UserResolver = {
  reviews: async (parent: any, args: any, context: any): Promise<Review[]> => {
    return [];
  }
};
