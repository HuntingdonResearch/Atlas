export const Mutation =
  `
  type Mutation {
      createProduct(product: ProductInput): Product
      updateProduct(product: ProductInput): Product
      deleteProduct(product: ProductRef): Product
  }
  `;
