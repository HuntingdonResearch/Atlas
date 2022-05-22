import { Order } from '../entities';

export const UserResolver = {
  orders: async (parent: any, args: any, context: any): Promise<Order[]> => {
    return [];
  }
};
