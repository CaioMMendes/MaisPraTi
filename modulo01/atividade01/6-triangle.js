const prompt = require("prompt-sync")()

const firstSide = parseFloat(prompt("Digite o primeiro lado: "))
const secondSide = parseFloat(prompt("Digite o segundo lado: "))
const thirdSide = parseFloat(prompt("Digite o terceiro lado: "))

if (
  (firstSide || firstSide === 0) &&
  (secondSide || secondSide === 0) &&
  (thirdSide || thirdSide === 0)
) {
  if (
    firstSide + secondSide > thirdSide &&
    firstSide + thirdSide > secondSide &&
    thirdSide + secondSide > firstSide
  ) {
    if (firstSide === secondSide && secondSide === thirdSide) {
      console.log("É um triângulo equilátero")
    } else if (
      firstSide === secondSide ||
      secondSide === thirdSide ||
      thirdSide === firstSide
    ) {
      console.log("É um triângulo isósceles")
    } else if (firstSide !== secondSide && secondSide !== thirdSide) {
      console.log("É um triângulo escaleno")
    }
  } else {
    console.log("Não é um triângulo")
  }
} else {
  console.log("Digite números válidos!")
}
