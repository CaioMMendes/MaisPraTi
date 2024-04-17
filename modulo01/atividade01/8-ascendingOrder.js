const prompt = require("prompt-sync")()

const firstValue = parseFloat(prompt("Digite o primeiro valor: "))
const secondValue = parseFloat(prompt("Digite o segundo valor: "))

if (firstValue > secondValue) {
  console.log(`O menor valor é: ${secondValue}`)
  console.log(`O maior valor é: ${firstValue}`)
} else if (firstValue < secondValue) {
  console.log(`O menor valor é: ${firstValue}`)
  console.log(`O maior valor é: ${secondValue}`)
} else {
  console.log("São iguais")
}
