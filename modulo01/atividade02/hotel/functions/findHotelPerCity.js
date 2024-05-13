const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")
const hasReview = require("../utils/hasReview")
const hasAvaliableRooms = require("../utils/hasAvaliableRooms")

async function findHotelPerCity() {
  console.log("-----------------------------------------------------------")
  try {
    const hotelsJson = await fs.readFile(`${__dirname}/../db.json`)
    const { hotels } = JSON.parse(hotelsJson)

    const cities = new Set()

    hotels.forEach((hotel) => {
      cities.add(hotel.city)
    })

    console.log()
    console.log("Digite o número da opção desejada")
    console.log()

    const citiesArray = [...cities]
    const uniqueCitiesLength = citiesArray.length

    citiesArray.forEach((city, i) => {
      console.log(`${i + 1} - ${city}`)
    })
    console.log(`${uniqueCitiesLength + 1} - Todas`)
    console.log()

    const city = parseInt(prompt("Digite o número da opção desejada: "))

    if (isNaN(city) || city < 1 || city > uniqueCitiesLength.length + 1) {
      console.log()
      console.log(`❌ A opção "${city}" não está dentre as disponíveis.`)
      return console.log()
    }

    const selectedCity = citiesArray[city - 1]

    let findedHotels
    if (city === uniqueCitiesLength + 1) {
      findedHotels = hotels
      console.log()
      console.log("Buscando por todos os hotéis...")
    } else {
      findedHotels = hotels.filter((hotel) => hotel.city === selectedCity)
    }

    console.log()
    console.log(`Numero de hotéis encontrados`, findedHotels.length)
    console.log("✅ Hotéis encontrados:")
    if (findedHotels.length < 1) {
      return console.log(
        `Não foi possível encontrar nenhum hotel buscando por "${city} - ${selectedCity}".`
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
    console.log("❌ Ocorreu um erro ao tentar buscar os hotéis.")
  }
}

module.exports = findHotelPerCity
