export const Mutation =
  `
  type Mutation {
      createReview(review: ReviewInput): Review
      updateReview(review: ReviewInput): Review
      deleteReview(review: ReviewRef): Review
  }
  `;
