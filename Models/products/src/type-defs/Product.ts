export const Product =
  `
  type Product @key(fields: "id") {
      id: ID
      name: String
      details: JSON
      createDate: Timestamp
      updateDate: Timestamp
  }
  `;
