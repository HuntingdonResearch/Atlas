export const User =
  `
  type User @key(fields: "id") {
      id: ID
      createDate: Timestamp
      updateDate: Timestamp
      reviews: [Review]
  }
  `;
