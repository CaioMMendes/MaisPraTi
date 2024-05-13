const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")
const hasAvaliableRooms = require("../utils/hasAvaliableRooms")

async function occupancyReport() {
  console.log("-----------------------------------------------------------")
  try {
    const hotelsJson = await fs.readFile(`${__dirname}/../db.json`)
    const { hotels } = JSON.parse(hotelsJson)

    const hotelsLength = hotels.length
    console.log()
    console.log("Escolha um hotel para gerar o relatório")
    console.log()
    hotels.forEach((hotel, index) => {
      console.log(`${index + 1} - ${hotel.name} na cidade ${hotel.city}`)
    })
    console.log()
    const hotelNumber = parseInt(
      prompt("Digite o número do hotel para gerar o relatório: ")
    )

    if (isNaN(hotelNumber) || hotelNumber < 1 || hotelNumber > hotelsLength) {
      console.log()
      console.log(`❌ A opção ${hotelNumber} não existe.`)
      return console.log()
    }

    const { name, city, totalRooms, avaliableRooms } = hotels[hotelNumber - 1]

    console.log()
    console.log(`Gerando relatórios para o hotel encontrado...`)
    console.log()

    const occupation = `${(
      ((totalRooms - avaliableRooms.length) / totalRooms) *
      100
    ).toFixed(2)} %`

    console.table({
      "Nome": name,
      "Cidade": city,
      "Número de quartos": totalRooms,
      "Quartos disponíveis": hasAvaliableRooms(avaliableRooms),
      "Ocupação": occupation,
      "Número de quartos ocupados": totalRooms - avaliableRooms.length,
    })
  } catch (error) {
    console.log()
    console.log("❌ Ocorreu um erro ao tentar gerar o relatório")
    console.log()
    console.log(error)
  }
}

module.exports = occupancyReport
