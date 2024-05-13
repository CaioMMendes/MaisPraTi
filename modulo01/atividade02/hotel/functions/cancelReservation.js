const fs = require("node:fs/promises")
const hasAvaliableRooms = require("../utils/hasAvaliableRooms")
const hasReview = require("../utils/hasReview")
const prompt = require("prompt-sync")()

async function cancelReservation() {
  console.log("-----------------------------------------------------------")
  let hotelsData
  console.log("Escolha um hotel para cancelar a reserva:")

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
  let { hotels, reservations } = hotelsData

  try {
    const hotelsWithReservations = hotels.filter((hotel) => {
      if (
        reservations.some(
          (reservation) =>
            reservation.idHotel === hotel.id && reservation.checkedIn === false
        )
      ) {
        return true
      } else {
        return false
      }
    })

    if (hotelsWithReservations.length === 0) {
      console.log()
      console.log(
        "Não existe nenhum hotel que possui reservas com possibilidade de cancelamento."
      )
      return console.log()
    }

    hotelsWithReservations.forEach(
      ({ name, city, avaliableRooms, reviews }, i) => {
        const review = hasReview(reviews)
        console.log()
        console.log(`Hotel ${i + 1}`)
        console.table({
          "Hotel": name,
          "Cidade": city,
          "Quartos disponíveis": hasAvaliableRooms(avaliableRooms),
          "Avaliação": review,
        })
        console.log()
      }
    )

    console.log()
    const hotelNumber = parseInt(prompt("Escolha o número do hotel desejado: "))

    if (
      isNaN(hotelNumber) ||
      hotelNumber < 1 ||
      hotelNumber > hotelsWithReservations.length
    ) {
      console.log("❌ O número escolhido não pertence a nenhum hotel!")
      return console.log()
    }

    const selectedHotel = hotelsWithReservations[hotelNumber - 1]
    const { id, name } = selectedHotel

    const reservationsWithoutCheckIn = reservations.filter((reservation) => {
      if (reservation.idHotel === id && reservation.checkedIn === false) {
        return true
      } else {
        return false
      }
    })

    console.log()
    console.log("Escolha uma opção para realizar o cancelamento da reserva")
    console.log()

    reservationsWithoutCheckIn.forEach((reservation, i) => {
      console.log(
        `${i + 1} - Nome: ${reservation.guestName}, quarto: ${
          reservation.hotelRoom
        }, hotel: ${name}`
      )
    })

    console.log()

    const checkInNumber = parseInt(
      prompt("Escolha o número da reserva desejada: ")
    )

    if (
      isNaN(checkInNumber) ||
      checkInNumber < 1 ||
      checkInNumber > reservationsWithoutCheckIn.length
    ) {
      console.log("❌ O número escolhido não pertence a nenhuma reserva!")
      return console.log()
    }

    const selectedReservation = reservationsWithoutCheckIn[checkInNumber - 1]

    const newReservations = reservations.filter(
      (reservation) => reservation.id !== selectedReservation.id
    )

    const newHotels = hotels.map((hotel) => {
      if (hotel.id === selectedReservation.idHotel) {
        return {
          ...hotel,
          avaliableRooms: [
            ...hotel.avaliableRooms,
            selectedReservation.hotelRoom,
          ],
        }
      }
      return hotel
    })

    await fs.writeFile(
      `${__dirname}/../db.json`,
      JSON.stringify({
        hotels: newHotels,
        reservations: newReservations,
      }),
      "utf8",
      (err) => {
        if (err) {
          console.error(
            "❌ Ocorreu um erro ao tentar cancelar a reserva. ",
            err
          )
          return
        }
      }
    )

    console.log()
    console.log("✅ Reserva cancelada com sucesso!")
    console.log()
  } catch (error) {
    console.log()
    console.log("❌ Ocorreu um erro ao tentar cancelar a reserva.")
    console.log()
    console.log(error)
    console.log()
  }
}

module.exports = cancelReservation
