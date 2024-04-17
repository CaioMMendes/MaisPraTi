const prompt = require("prompt-sync")()

do {
  number = parseInt(prompt("Digite um número inteiro: "))
  if (!number || number <= 0) {
    break
  } else if (number % 2 === 0) {
    console.log(`O número ${number} é PAR`)
  } else {
    console.log(`O número ${number} é Ímpar`)
  }
} while (number > 0)
