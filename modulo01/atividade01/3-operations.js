const prompt = require("prompt-sync")()

const firstNumber = parseInt(prompt("Digite o primeiro número inteiro: "))
const secondNumber = parseInt(prompt("Digite o segundo número inteiro: "))
const thirdNumber = parseInt(prompt("Digite o terceiro número inteiro: "))
let fourthNumber = parseInt(prompt("Digite o quarto número inteiro: "))

fourthNumber = firstNumber + secondNumber + thirdNumber

console.log(
  `Some 25 ao primeiro inteiro: ${firstNumber} + 25 = ${firstNumber + 25}`
)
console.log(
  `Triplique o valor do segundo inteiro: ${secondNumber} * 3 = ${
    secondNumber * 3
  }`
)
console.log(
  `Modifique o valor do terceiro inteiro para 12% do valor original: ${thirdNumber} * 0.12 = ${
    thirdNumber * 0.12
  }`
)
console.log(
  `Armazene noquarto a soma dos valores originais: ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${fourthNumber}`
)
