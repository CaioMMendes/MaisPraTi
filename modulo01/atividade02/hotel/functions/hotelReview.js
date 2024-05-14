const prompt = require("prompt-sync")()

function hotelReview(hotels, { id, reviews }, selectedCheckOut) {
  console.log()
  let correctReview = false
  let inputReview

  while (correctReview === false) {
    inputReview = parseFloat(
      prompt("Digite o valor da nota para o hotel (entre 0 e 5): ")
    )

    if (isNaN(inputReview) || inputReview < 0 || inputReview > 5) {
      console.log()
      console.log(
        `❌ O valor "${inputReview}" não está entre 0 e 5, digite um valor válido`
      )
      console.log()
    } else {
      correctReview = true
    }
  }

  const updatedReviewSum = reviews.reviewsSum + inputReview
  const updatedNumberOfReviews = (reviews.numberOfReviews += 1)
  const updatedReviewMedia = updatedReviewSum / updatedNumberOfReviews

  const updatedReview = {
    reviewMedia: updatedReviewMedia,
    reviews: [
      ...reviews.reviews,
      { "Nome": selectedCheckOut.guestName, "Nota": inputReview },
    ],
    numberOfReviews: updatedNumberOfReviews,
    reviewsSum: updatedReviewSum,
  }

  const newHotels = hotels.map((hotel) => {
    if (hotel.id === id) {
      return {
        ...hotel,
        avaliableRooms: [
          ...hotel.avaliableRooms,
          selectedCheckOut.hotelRoom,
        ].sort((a, b) => Number(a) - Number(b)),
        reviews: updatedReview,
      }
    }
    return hotel
  })

  return newHotels
}

module.exports = hotelReview
