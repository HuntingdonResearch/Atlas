export const Review =
  `
  type Review @key(fields: "id") {
      id: ID
      subject: String
      content: String
      createDate: Timestamp
      updateDate: Timestamp
      product: Product
      user: User
  }
  `;
