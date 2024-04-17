const prompt = require("prompt-sync")()

const firstAssessment = parseFloat(
  prompt("Digite a nota da primeira avaliação: ")
)
const secondAssessment = parseFloat(
  prompt("Digite a nota da segunda avaliação: ")
)

const average = (firstAssessment + secondAssessment) / 2

if (
  (firstAssessment || firstAssessment === 0) &&
  (secondAssessment || secondAssessment === 0)
) {
  if (average >= 6) {
    console.log("PARABÉNS! Você foi aprovado")
  } else {
    console.log("Você foi REPROVADO! Estude mais")
  }
} else {
  console.log("Digite notas válidas!")
}
