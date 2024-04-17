const prompt = require("prompt-sync")()

const code = parseFloat(prompt("Digite o código de origem do produto: "))

if (code || code === 0) {
  if (code === 1) {
    console.log("Sul")
  } else if (code === 2) {
    console.log("Norte")
  } else if (code === 3) {
    console.log("Leste")
  } else if (code === 4) {
    console.log("Oeste")
  } else if (code === 5 || code === 6 || (code >= 25 && code <= 50)) {
    console.log("Nordeste")
  } else if (code >= 7 && code <= 9) {
    console.log("Sudeste")
  } else if (code >= 10 && code <= 20) {
    console.log("Centro-Oeste")
  } else {
    console.log("Produto Importado")
  }
} else {
  console.log("Digite um código válido!")
}
