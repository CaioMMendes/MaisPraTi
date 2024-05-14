function hasReview(reviews) {
  const review =
    reviews.numberOfReviews !== 0
      ? `⭐ ${reviews.reviewMedia.toFixed(2)}`
      : "Sem avaliações"
  return review
}

module.exports = hasReview
