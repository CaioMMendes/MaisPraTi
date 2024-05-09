const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio26() {
  const matrixA = matrixGenerator(3, 5)
  const matrixB = matrixGenerator(3, 5)

  const rowsA = matrixA.length
  const columnsB = matrixB[0].length
  const productMatrix = []

  for (let i = 0; i < rowsA; i++) {
    const array = []
    for (let j = 0; j < columnsB; j++) {
      array.push(matrixA[i][j] * matrixB[i][j])
    }
    productMatrix.push(array)
  }
  console.log()
  console.table(matrixA)
  console.table(matrixB)
  console.log("A matriz produto é:")
  console.table(productMatrix)
}

module.exports = exercicio26
