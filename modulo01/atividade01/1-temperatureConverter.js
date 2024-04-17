/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/

const prompt = require("prompt-sync")()

const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "))

const fahrenheit = (celsius * 9) / 5 + 32

if (celsius || celsius === 0) {
  console.log(`${celsius}°C são iguais a ${fahrenheit}°F`)
} else {
  console.log("Digite uma temperatura válida")
}
