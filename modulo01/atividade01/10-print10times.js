const prompt = require("prompt-sync")()

const number = parseInt(prompt("Digite um número inteiro: "))

if (number || number === 0) {
  for (let index = 0; index < 10; index++) {
    console.log(number)
  }
} else {
  console.log("Digite um número válido")
}
