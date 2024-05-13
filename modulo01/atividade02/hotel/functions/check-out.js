const hasAvaliableRooms = require("../utils/hasAvaliableRooms")
const hasReview = require("../utils/hasReview")
const fs = require("node:fs/promises")
const hotelReview = require("./hotelReview")
const prompt = require("prompt-sync")()

async function checkOut() {
  console.log("-----------------------------------------------------------")
  let hotelsData

  console.log("Escolha um hotel para realizar o check-out:")

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
    const hotelsWithCheckIn = hotels.filter((hotel) => {
      if (
        reservations.some(
          (reservation) =>
            reservation.idHotel === hotel.id && reservation.checkedIn === true
        )
      ) {
        return true
      } else {
        return false
      }
    })

    if (hotelsWithCheckIn.length === 0) {
      console.log()
      console.log(
        "Não existe nenhum hotel com check-in para realizar check-out."
      )
      return console.log()
    }

    hotelsWithCheckIn.forEach(({ name, city, avaliableRooms, reviews }, i) => {
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
    })

    console.log()
    const hotelNumber = parseInt(prompt("Escolha o número do hotel desejado: "))

    if (
      isNaN(hotelNumber) ||
      hotelNumber < 1 ||
      hotelNumber > hotelsWithCheckIn.length
    ) {
      console.log("❌ O número escolhido não pertence a nenhum hotel!")
      return console.log()
    }

    const selectedHotel = hotelsWithCheckIn[hotelNumber - 1]
    const { id, name } = selectedHotel

    const reservationsWithoutCheckOut = reservations.filter((reservation) => {
      if (reservation.idHotel === id && reservation.checkedIn === true) {
        return true
      } else {
        return false
      }
    })

    console.log()
    console.log("Escolha uma opção para realizar o check-out")
    console.log()

    reservationsWithoutCheckOut.forEach((reservation, i) => {
      console.log(
        `${i + 1} - Nome: ${reservation.guestName}, quarto: ${
          reservation.hotelRoom
        }, hotel: ${name}`
      )
    })

    console.log()

    const checkOutNumber = parseInt(
      prompt("Escolha o número da reserva desejada: ")
    )

    if (
      isNaN(checkOutNumber) ||
      checkOutNumber < 1 ||
      checkOutNumber > reservationsWithoutCheckOut.length
    ) {
      console.log("❌ O número escolhido não pertence a nenhuma reserva!")
      return console.log()
    }

    let response = false
    let wantMakeReview

    while (response === false) {
      console.log()
      console.log("Deseja avaliar a estadia: ")
      console.log()
      console.log("1 - Sim")
      console.log("2 - Não")
      console.log()
      wantMakeReview = parseInt(prompt("Digite o número da opção desejada: "))

      if (isNaN(wantMakeReview) || wantMakeReview < 1 || wantMakeReview > 2) {
        console.log()
        console.log(
          `❌ A opção ${wantMakeReview} não está dentre as disponíveis.`
        )
        console.log()
      } else {
        response = true
      }
    }

    let newHotels
    const selectedCheckOut = reservationsWithoutCheckOut[checkOutNumber - 1]

    if (wantMakeReview === 1) {
      newHotels = hotelReview(hotels, selectedHotel, selectedCheckOut)
    } else {
      newHotels = hotels.map((hotel) => {
        if (hotel.id === selectedCheckOut.idHotel) {
          return {
            ...hotel,
            avaliableRooms: [
              ...hotel.avaliableRooms,
              selectedCheckOut.hotelRoom,
            ].sort((a, b) => Number(a) - Number(b)),
          }
        }
        return hotel
      })
    }

    const newReservations = reservations.filter(
      (reservation) => reservation.id !== selectedCheckOut.id
    )

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
            "❌ Ocorreu um erro ao tentar realizar o check-in. ",
            err
          )
          return
        }
      }
    )

    console.log()
    console.log("✅ Check-out realizado com sucesso!")
    console.log(
      `Obrigado ${selectedCheckOut.guestName} por ter se hospedado no hotel ${name} `
    )
    console.log("Volte sempre")
    console.log()
  } catch (error) {
    console.log()
    console.log("❌ Ocorreu um erro ao tentar realizar o check-out.")
    console.log()
    console.log(error)
    console.log()
  }
}

module.exports = checkOut
