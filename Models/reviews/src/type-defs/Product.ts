export const Product =
  `
  type Product @key(fields: "id") {
      id: ID
      createDate: Timestamp
      updateDate: Timestamp
      reviews: [Review]
  }
  `;
