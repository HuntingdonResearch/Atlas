import { Order, Product } from '../entities';

export const LineResolver = {
  order: async (parent: any, args: any, context: any): Promise<Order> => {
    return null;
  },

  product: async (parent: any, args: any, context: any): Promise<Product> => {
    return null;
  }
};
