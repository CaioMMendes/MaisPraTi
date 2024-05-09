function matrixGenerator(rows, columns, min = 0, max = 10) {
  const matrix = []
  for (let i = 0; i < rows; i++) {
    const array = []
    for (let j = 0; j < columns; j++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min //10 (Math.random()*(max-min+1))+min
      array.push(randomNumber)
    }
    matrix.push(array)
  }
  return matrix
}

module.exports = matrixGenerator
