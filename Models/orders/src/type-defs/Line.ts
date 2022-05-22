export const Line =
  `
  type Line @key(fields: "id") {
      id: ID
      quantity: Float
      price: Float
      createDate: Timestamp
      updateDate: Timestamp
      order: Order
      product: Product
  }
  `;
