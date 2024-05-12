const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")
const idGenerator = require("../utils/idGenerator")

async function addHotel() {
  const name = prompt("Digite o nome do hotel: ").trim()
  const city = prompt("Digite a cidade do hotel: ").trim()
  const totalRooms = parseInt(
    prompt("Digite o número total de quartos do hotel: ")
  )

  if (totalRooms <= 0 || isNaN(totalRooms)) {
    return console.log("Digite uma quantidade total de quartos válida.")
  }

  const avaliableRoomsString = prompt(
    "Digite o número dos quartos disponíveis separados por , ex: 1,3,15 : "
  ).trim()
  const avaliableRooms = []

  const avaliableRoomsArray = avaliableRoomsString.split(",")
  for (let value of avaliableRoomsArray) {
    const cleanString = value.trim()
    if (cleanString === "")
      return console.log(
        "Todos os quartos disponíveis precisam de um identificador!"
      )

    avaliableRooms.push(cleanString)
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
    console.log(`Preencha todos os campos`)
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
          console.error("Ocorreu um erro ao tentar cadastrar um hotel. ", err)
          return
        }
        console.log("Hotel cadastrado com sucesso!")
        console.log()
      }
    )
  } catch (error) {
    console.log("Ocorreu um erro ao tentar cadastrar um hotel.")
  }
}

module.exports = addHotel
