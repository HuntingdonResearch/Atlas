export const OrderInput =
  `
  input OrderInput {
      reference: String
      lines: [LineInput]
      userID: ID
  }
  `;
