function matrixGenerator(rows, columns) {
  const matrix = []
  for (let i = 0; i < rows; i++) {
    const array = []
    for (let j = 0; j < columns; j++) {
      const randomNumber = Math.floor(Math.random() * 11) //10 (Math.random()*(max-min+1))+min
      array.push(randomNumber)
    }
    matrix.push(array)
  }
  return matrix
}

module.exports = matrixGenerator
