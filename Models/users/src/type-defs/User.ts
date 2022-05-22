export const User =
  `
  type User @key(fields: "id") {
      id: ID
      firstName: String
      lastName: String
      userName: String
      birthDate: Date
      createDate: Timestamp
      updateDate: Timestamp
  }
  `;
