const prompt = require("prompt-sync")()
const fs = require("node:fs/promises")
const addHotel = require("./functions/addHotel")
const findHotelPerCity = require("./functions/findHotelPerCity")
const occupancyReport = require("./functions/occupancyReport")
const listReservation = require("./functions/listReservations")
const makeReservation = require("./functions/makeReservation")
const cancelReservation = require("./functions/cancelReservation")

async function exercicio50() {
  let leave = false
  function leaveFunction() {
    leave = true
  }

  while (leave === false) {
    const actions = {
      "Adicionar hotel": addHotel,
      "Buscar hotéis por cidade": findHotelPerCity,
      "Fazer reserva": makeReservation,
      "Cancelar reserva": cancelReservation,
      "Listar reservas": listReservation,
      "Relatório de ocupação": occupancyReport,
      "Sair": leaveFunction,
    }
    const actionsKeys = Object.keys(actions)
    const numberOfActions = actionsKeys.length

    console.log("-----------------------------------------------------------")
    console.log()
    console.log("Escolha uma das opções abaixo")
    console.log()
    for (let i = 0; i < numberOfActions; i++) {
      console.log(`${i + 1} - ${actionsKeys[i]}`)
    }

    console.log()

    const action = parseInt(prompt("Digite o número da opção desejada: "))
    console.log()

    if (isNaN(action) || action < 1 || action > numberOfActions) {
      console.log()
      console.log(
        `A opção "${action}" não está dentre as disponíveis, escolha uma opção válida.`
      )
      console.log()
    }

    await actions[actionsKeys[action - 1]]()
  }
}

exercicio50()

module.exports = exercicio50
