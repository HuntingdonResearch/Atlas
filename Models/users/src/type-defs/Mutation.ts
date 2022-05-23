export const Mutation =
  `
  type Mutation {
      createUser(user: UserInput, userName: String, password: String): User
      updateUser(user: UserInput): User
      deleteUser(user: UserRef): User
      changeUserName(userName: String): User
      changePassword(password: String): User
  }
  `;
