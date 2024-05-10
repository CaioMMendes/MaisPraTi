const arrayGenerator = require("./helpers/arrayGenerator")
const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio36() {
  const template = arrayGenerator(13, 0, 3)
  const rows = 100
  const columns = 13
  const bettors = matrixGenerator(rows, columns, 0, 3)

  for (let i = 0; i < rows; i++) {
    let hits = 0
    const newTemplate = [...template]
    for (let j = 0; j < columns; j++) {
      const newTemplateLength = newTemplate.length
      const numberBettor = bettors[i][j]
      for (let k = 0; k < newTemplateLength; k++) {
        if (numberBettor === newTemplate[k]) {
          hits++
          newTemplate.splice(k, 1)
          break
        }
      }
    }
    if (hits === 13) {
      console.log(`Apostador ${i + 1}: Parabéns, tu foi o GANHADOR.`)
    } else {
      console.log(`Apostador ${i + 1}: ${hits} acertos.`)
    }
  }
}

module.exports = exercicio36
