const fs = require("node:fs/promises")

async function listReservation() {
  try {
    const hotelsJson = await fs.readFile(`${__dirname}/../db.json`)
    const { hotels, reservations } = JSON.parse(hotelsJson)

    if (reservations.length === 0) {
      console.log()
      console.log("Ainda não existe nenhuma reserva nos hotéis.")
      return console.log()
    }

    console.log()
    console.log("Número de reservas encontradas: ", reservations.length)
    console.log("Lista com as informações de todas as reservas:")
    console.log()

    for (const { id, idHotel, guestName } of reservations) {
      const reservationHotel = hotels.find((hotel) => {
        return hotel.id === idHotel
      })
      if (!reservationHotel) {
        console.log()
        console.log(
          `Ocorreu um erro ao tentar encontrar um hotel com id: `,
          idHotel
        )
        console.log()
      } else {
        const { reviews, name, city, totalRooms, avaliableRooms } =
          reservationHotel
        const review =
          reviews.numberOfReviews !== 0
            ? reviews.reviewsMedia
            : "Sem avaliações"

        console.log()
        console.table({
          "Id da reserva": id,
          "Nome do hóspede": guestName,
          "Nome do hotel": name,
          "Cidade do hotel": city,
          "Número de quartos do hotel": totalRooms,
          "Quartos disponíveis do hotel": avaliableRooms,
          "Avaliações do hotel": review,
        })
        console.log()
      }
    }
  } catch (error) {
    console.log()
    console.log("Ocorreu um erro ao tentar listar as reservas")
    console.log()
    console.log(error)
  }
}

module.exports = listReservation
