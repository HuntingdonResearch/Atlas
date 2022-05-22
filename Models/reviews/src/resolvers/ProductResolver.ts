import { Review } from '../entities';

export const ProductResolver = {
  reviews: async (parent: any, args: any, context: any): Promise<Review[]> => {
    return [];
  }
};
