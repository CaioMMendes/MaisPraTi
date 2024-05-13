const fs = require("node:fs/promises")
const hasReview = require("../utils/hasReview")
const prompt = require("prompt-sync")()

async function reviewsList() {
  console.log("-----------------------------------------------------------")
  let hotelsData
  console.log("Escolha um hotel para visualizar a lista de avaliações:")

  try {
    const hotelsJson = await fs.readFile(`${__dirname}/../db.json`)
    hotelsData = JSON.parse(hotelsJson)
  } catch (error) {
    console.log()
    console.log("❌ Ocorreu um erro ao tentar ler os hotéis")
    console.log()
    console.log(error)
    return console.log()
  }
  let { hotels } = hotelsData

  try {
    const hotelsWithReviews = hotels.filter((hotel) => {
      if (hotel.reviews.numberOfReviews > 0) {
        return true
      } else {
        return false
      }
    })

    if (hotelsWithReviews.length === 0) {
      console.log()
      console.log("Não existe nenhum hotel com avaliações.")
      return console.log()
    }

    hotelsWithReviews.forEach(({ name, city, reviews }, i) => {
      const review = hasReview(reviews)
      console.log()
      console.log(`Hotel ${i + 1}`)
      console.table({
        "Hotel": name,
        "Cidade": city,
        "Avaliação média": review,
      })
      console.log()
    })

    console.log()
    const hotelNumber = parseInt(prompt("Escolha o número do hotel desejado: "))

    if (
      isNaN(hotelNumber) ||
      hotelNumber < 1 ||
      hotelNumber > hotelsWithReviews.length
    ) {
      console.log("❌ O número escolhido não pertence a nenhum hotel!")
      return console.log()
    }

    const selectedHotel = hotelsWithReviews[hotelNumber - 1]
    const { name, city, reviews } = selectedHotel

    console.log()
    console.log(`O hotel ${city} possui ${reviews.reviews.length} avaliaçõ(es)`)
    console.log(`Lsita de avaliações do hotel: ${name} da cidade: ${city}`)
    console.log()

    reviews.reviews.forEach((review) => {
      console.table(review)
    })

    console.log()
    console.log()
  } catch (error) {
    console.log()
    console.log("❌ Ocorreu um erro ao tentar exibir as avaliações.")
    console.log()
    console.log(error)
    console.log()
  }
}

module.exports = reviewsList
