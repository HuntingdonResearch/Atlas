export const Mutation =
  `
  type Mutation {
      createOrder(order: OrderInput): Order
      updateOrder(order: OrderInput): Order
      deleteOrder(order: OrderRef): Order
      createLine(line: LineInput): Line
      updateLine(line: LineInput): Line
      deleteLine(line: LineRef): Line
  }
  `;
