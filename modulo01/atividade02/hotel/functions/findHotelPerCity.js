const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")
const hasReview = require("../utils/hasReview")
const hasAvaliableRooms = require("../utils/hasAvaliableRooms")

async function findHotelPerCity() {
  const city = prompt("Digite o nome da cidade: ").trim().toLowerCase()

  if (city === "") {
    console.log()
    console.log("Buscando por todas as cidades")
    console.log()
  }

  try {
    const hotels = await fs.readFile(`${__dirname}/../db.json`)
    const hotelsData = JSON.parse(hotels)

    const findedHotels = hotelsData.hotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(city)
    )
    console.log()
    console.log(`Numero de hotéis encontrados`, findedHotels.length)
    console.log("Hotéis encontrados:")
    if (findedHotels.length < 1) {
      return console.log(
        `Não foi possível encontrar nenhum hotel buscando por "${city}".`
      )
    }

    for (let {
      reviews,
      name,
      city,
      totalRooms,
      avaliableRooms,
    } of findedHotels) {
      const review = hasReview(reviews)

      console.table({
        "Nome": name,
        "Cidade": city,
        "Número de quartos": totalRooms,
        "Quartos disponíveis": hasAvaliableRooms(avaliableRooms),
        "Avaliações": review,
      })
      console.log()
    }
  } catch (error) {
    console.log()
    console.log(error)
    console.log()
    console.log("Ocorreu um erro ao tentar buscar os hotéis.")
  }
}

module.exports = findHotelPerCity
