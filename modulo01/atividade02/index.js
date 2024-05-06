const exercicio1 = require("./1-smokerDaysLost")
const exercicio2 = require("./2-trafficTicket")
const exercicio3 = require("./3-tripPrice")
const exercicio4 = require("./4-triangle")
const exercicio5 = require("./5-JoKenPo")
const exercicio6 = require("./6-sortedNumber")
const exercicio7 = require("./7-carRent")

const prompt = require("prompt-sync")()

let exercicio

do {
  exercicio = prompt(
    "Escolha um exercicio 1-50 ou (sair->sair, todos->executar todos): "
  )

  if (exercicio !== "sair" && exercicio !== null) {
    switch (exercicio) {
      case "1":
        exercicio1()
        break
      case "2":
        exercicio2()
        break
      case "3":
        exercicio3()
        break
      case "4":
        exercicio4()
        break
      case "5":
        exercicio5()
        break
      case "6":
        exercicio6()
        break
      case "7":
        exercicio7()
        break

      case "todos": {
        exercicio1()
        exercicio2()
        exercicio3()
        exercicio4()
        exercicio5()
        exercicio6()
        exercicio7()
      }
      case isNaN(exercicio):
        console.log("Escolha um número!")
        break
      default:
        console.log("Escolha um exercício válido")
    }
  }
} while (exercicio !== "sair" && exercicio !== null)
