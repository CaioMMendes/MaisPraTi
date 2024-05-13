const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")
const idGenerator = require("../utils/idGenerator")

async function addHotel() {
  console.log("-----------------------------------------------------------")
  const name = prompt("Digite o nome do hotel: ").trim()
  const city = prompt("Digite a cidade do hotel: ").trim()
  const totalRooms = parseInt(
    prompt("Digite o número total de quartos do hotel: ")
  )

  if (totalRooms <= 0 || isNaN(totalRooms)) {
    return console.log("❌ Digite uma quantidade total de quartos válida.")
  }
  if (totalRooms > 30) {
    return console.log("❌ O número máximo de quartos é 30.")
  }

  const avaliableRooms = []

  for (let i = 1; i <= totalRooms; i++) {
    avaliableRooms.push(String(i))
  }

  const reviews = {
    reviewMedia: 0,
    reviews: [],
    numberOfReviews: 0,
    reviewsSum: 0,
  }

  console.log()
  if (
    name === "" ||
    city === "" ||
    totalRooms === "" ||
    avaliableRooms === ""
  ) {
    console.log(`❌ Preencha todos os campos`)
    return console.log()
  }

  const hotel = {
    id: idGenerator(),
    name,
    city,
    totalRooms,
    avaliableRooms,
    reviews,
  }

  try {
    const hotels = await fs.readFile(`${__dirname}/../db.json`)
    const hotelsData = JSON.parse(hotels)

    const alreadyRegisted = hotelsData.hotels.some((hotel) => {
      if (
        hotel.name.toLowerCase() === name.toLowerCase() &&
        hotel.city.toLowerCase() === city.toLowerCase()
      ) {
        return true
      } else {
        return false
      }
    })

    if (alreadyRegisted) {
      console.log()
      console.log(`O hotel "${name}" já existe na cidade "${city}"`)
      return console.log()
    }

    const updatedHotels = {
      ...hotelsData,
      hotels: [...hotelsData.hotels, hotel],
    }

    await fs.writeFile(
      `${__dirname}/../db.json`,
      JSON.stringify(updatedHotels),
      "utf8",

      (err) => {
        if (err) {
          console.error(
            "❌ Ocorreu um erro ao tentar cadastrar um hotel. ",
            err
          )
          return
        }
      }
    )

    console.log()
    console.log("✅ Hotel cadastrado com sucesso!")
    console.table(hotel)
    console.log()
  } catch (error) {
    console.log("❌ Ocorreu um erro ao tentar cadastrar um hotel.")
  }
}

module.exports = addHotel
