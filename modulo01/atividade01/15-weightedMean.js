const prompt = require("prompt-sync")()

let number = parseFloat(prompt("Digite um número: "))
let weight

if (number !== 0) {
  //para não entrar aqui caso o numero já seja 0
  weight = parseFloat(prompt("Digite o peso do número: "))

  if (number && (weight || weight === 0)) {
    let sum = 0
    let weightSum = 0
    let firstTime = true
    while (number !== 0) {
      if (firstTime === false) {
        number = parseFloat(prompt("Digite um número: "))
        if (number === 0) {
          break
        }
        weight = parseFloat(prompt("Digite o peso do número: "))
      }
      firstTime = false
      if ((number || number === 0) && (weight || weight === 0)) {
        sum += number * weight
        weightSum += weight
      } else {
        console.log("Digite parâmetros válidos")
        break
      }
    }
    if (number === 0) {
      console.log(
        `A média aritmética é de: ${
          weightSum === 0 ? "Divisão por zero" : sum / weightSum
        }`
      )
    }
  } else {
    console.log("Digite parâmetros válidos")
  }
}
