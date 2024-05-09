const exercicio1 = require("./1-smokerDaysLost")
const exercicio2 = require("./2-trafficTicket")
const exercicio3 = require("./3-tripPrice")
const exercicio4 = require("./4-triangle")
const exercicio5 = require("./5-JoKenPo")
const exercicio6 = require("./6-sortedNumber")
const exercicio7 = require("./7-carRent")
const exercicio8 = require("./8-pointsPerActivity")
const exercicio9 = require("./9-employeeSalary")
const exercicio10 = require("./10-doWhileNumbers")
const exercicio11 = require("./11-AP")
const exercicio12 = require("./12-fibonacci")
const exercicio14 = require("./14-names")
const exercicio15 = require("./15-tenNumbers")
const exercicio16 = require("./16-randomNumbers")
const exercicio17 = require("./17-ageAndName")

const exercisesList = [
  exercicio1,
  exercicio2,
  exercicio3,
  exercicio4,
  exercicio5,
  exercicio6,
  exercicio7,
  exercicio8,
  exercicio9,
  exercicio10,
  exercicio11,
  exercicio12,
  // exercicio13,
  exercicio14,
  exercicio15,
  exercicio16,
  exercicio17,
]

const prompt = require("prompt-sync")()
const exercisesLength = exercisesList.length
let exercise

do {
  exercise = prompt(
    "Escolha um exercise 1-50 ou (sair->sair, todos->executar todos): "
  )
  console.log(
    "-----------------------------------------------------------------------------"
  )

  if (exercise === "sair" || exercise === null) {
    console.log("Saindo...")
  } else if (exercise === "todos") {
    console.log(`Executando todos os exercícios`)

    for (let index = 0; index < exercisesLength; index++) {
      const element = exercisesList[index]
      console.log()
      console.log(`Executando exercício número ${index + 1}`)
      console.log()
      element()
      console.log()
      const leave = prompt(
        "Para sair digite sair, para continuar de enter ou digite qualquer coisa "
      )
      if (leave === "sair" || leave === "Sair") {
        console.log("Saindo...")
        break
      }
    }
  } else {
    const exerciseNumber = Number(exercise)
    if (
      isNaN(exerciseNumber) ||
      exerciseNumber > exercisesLength ||
      exerciseNumber < 1
    ) {
      console.log("Escolha um exercício válido!")
    } else {
      exercisesList[exercise - 1]()
    }
  }

  console.log(
    "-----------------------------------------------------------------------------"
  )
} while (exercise !== "sair" && exercise !== null)

// do {
//   exercicio = prompt(
//     "Escolha um exercicio 1-50 ou (sair->sair, todos->executar todos): "
//   )
//   console.log(
//     "-----------------------------------------------------------------------------"
//   )

//   if (exercicio !== "sair" && exercicio !== null) {
//     switch (exercicio) {
//       case "1":
//         exercicio1()
//         break
//       case "2":
//         exercicio2()
//         break
//       case "3":
//         exercicio3()
//         break
//       case "4":
//         exercicio4()
//         break
//       case "5":
//         exercicio5()
//         break
//       case "6":
//         exercicio6()
//         break
//       case "7":
//         exercicio7()
//         break
//       case "8":
//         exercicio8()
//         break
//       case "9":
//         exercicio9()
//         break
//       case "10":
//         exercicio10()
//         break
//       case "11":
//         exercicio11()
//         break
//       case "12":
//         exercicio12()
//         break
//       case "14":
//         exercicio14()
//         break
//       case "15":
//         exercicio15()
//         break
//       case "16":
//         exercicio16()
//         break
//       case "17":
//         exercicio17()
//         break

//       case "todos": {
//         exercicio1()
//         exercicio2()
//         exercicio3()
//         exercicio4()
//         exercicio5()
//         exercicio6()
//         exercicio7()
//       }
//       case isNaN(exercicio):
//         console.log("Escolha um número!")
//         break
//       default:
//         console.log("Escolha um exercício válido")
//     }
//   }
//   console.log(
//     "-----------------------------------------------------------------------------"
//   )
// } while (exercicio !== "sair" && exercicio !== null)
