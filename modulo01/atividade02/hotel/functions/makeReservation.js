const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")
const idGenerator = require("../utils/idGenerator")
const hasReview = require("../utils/hasReview")

async function makeReservation() {
  let hotelsData
  console.log("Escolha um hotel para realizar a reserva:")

  try {
    const hotelsJson = await fs.readFile(`${__dirname}/../db.json`)
    hotelsData = JSON.parse(hotelsJson)
  } catch (error) {
    console.log()
    console.log("Ocorreu um erro ao tentar ler os hotéis")
    return console.log()
  }
  const { hotels, reservations } = hotelsData

  hotels.forEach(({ name, city, avaliableRooms, reviews }, i) => {
    const review = hasReview(reviews)
    console.log()
    console.log(`Hotel ${i + 1}`)
    console.table({
      "Hotel": name,
      "Cidade": city,
      "Quartos disponíveis":
        avaliableRooms.length > 0
          ? avaliableRooms
          : "Sem quartos disponíveis no momento",
      "Avaliação": review,
    })
    console.log()
  })

  console.log()
  const hotelNumber = parseInt(prompt("Escolha o número do hotel desejado: "))

  if (isNaN(hotelNumber) || hotelNumber < 1 || hotelNumber > hotels.length) {
    console.log("O número escolhido não pertence a nenhum hotel!")
    return console.log()
  }

  const selectedHotel = hotels[hotelNumber - 1]
  const { name, city, avaliableRooms } = selectedHotel

  if (avaliableRooms.length < 1) {
    console.log()
    console.log(
      `O hotel ${name} não possui quartos disponíveis no momento, selecione outra opção`
    )
    console.log()
    return makeReservation()
  }

  console.log()
  console.log(`Você escolheu o hotel ${name} na cidade ${city}`)
  console.log()
  console.log("Escolha um dos quartos da lista para realizar a reserva: ")

  console.log("Quartos disponíveis: ", ...avaliableRooms)

  console.log()

  const selectedRoom = prompt("Digite o quarto escolhido: ").trim()

  if (!avaliableRooms.includes(selectedRoom)) {
    console.log()
    console.log(
      `O quarto ${selectedRoom} não está disponível ou não existe nesse hotel!`
    )
    console.log()
  }

  const guestName = prompt("Digite seu nome: ").trim()

  try {
    const reservation = {
      id: idGenerator(),
      idHotel: selectedHotel.id,
      guestName: guestName,
      hotelRoom: selectedRoom,
    }

    const updatedHotels = {
      ...hotelsData,
      reservations: [...hotelsData.reservations, reservation],
    }

    await fs.writeFile(
      `${__dirname}/../db.json`,
      JSON.stringify(updatedHotels),
      "utf8",

      (err) => {
        if (err) {
          console.error("Ocorreu um erro ao tentar criar uma reserva. ", err)
          return
        }
      }
    )

    console.log()
    console.log("Reserva criada com sucesso!")
    console.table(reservation)
    console.log()
  } catch (error) {
    console.log()
    console.log(`Ocorreu um erro ao tentar criar a reserva.`)
    console.log()
    console.log(error)
  }
}

module.exports = makeReservation
