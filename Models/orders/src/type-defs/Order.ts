export const Order =
  `
  type Order @key(fields: "id") {
      id: ID
      reference: String
      createDate: Timestamp
      updateDate: Timestamp
      lines: [Line]
      user: User
  }
  `;
