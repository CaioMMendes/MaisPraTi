function hasReview(reviews) {
  const review =
    reviews.numberOfReviews !== 0
      ? `⭐ ${reviews.reviewMedia}`
      : "Sem avaliações"
  return review
}

module.exports = hasReview
