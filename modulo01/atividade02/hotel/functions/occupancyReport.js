const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")

async function occupancyReport() {
  const hotelName = prompt("Digite o nome do hotel para gerar o relatório: ")
    .trim()
    .toLowerCase()

  try {
    const hotels = await fs.readFile(`${__dirname}/../db.json`)
    const hotelsData = JSON.parse(hotels)

    const findedHotel = hotelsData.hotels.filter(
      (hotel) => hotel.name.toLowerCase() === hotelName
    )

    if (findedHotel.length < 1) {
      console.log()
      console.log(
        `Não foi possível encontrar nenhum hotel com o nome: ${hotelName}`
      )
      return console.log()
    }

    console.log()
    console.log(`Número de hoteis ${hotelName}: `, findedHotel.length)
    console.log(`Gerando relatórios para os hotéis encontrados...`)
    console.log()

    for (let { name, city, totalRooms, avaliableRooms } of findedHotel) {
      const occupation = `${(
        ((totalRooms - avaliableRooms.length) / totalRooms) *
        100
      ).toFixed(2)} %`

      console.table({
        "Nome": name,
        "Cidade": city,
        "Número de quartos": totalRooms,
        "Quartos disponíveis": avaliableRooms,
        "Ocupação": occupation,
        "Número de quartos ocupados": totalRooms - avaliableRooms.length,
      })
    }
  } catch (error) {
    console.log()
    console.log("Ocorreu um erro ao tentar gerar o relatório")
    console.log()
    console.log(error)
  }
}

module.exports = occupancyReport
