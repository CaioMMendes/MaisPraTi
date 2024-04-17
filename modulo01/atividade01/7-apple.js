const prompt = require("prompt-sync")()

const numberOfApples = parseInt(prompt("Digite o número de maçãs compradas: "))

const price =
  numberOfApples >= 12 ? numberOfApples * 0.25 : numberOfApples * 0.3

if (numberOfApples >= 0) {
  console.log(`O valor total da compra foi de R$: ${price}`)
} else {
  console.log("Digite um número maior ou igual a 0")
}
