function arrayGenerator(columns, min = 0, max = 10) {
  const array = []

  for (let j = 0; j < columns; j++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min //10 (Math.random()*(max-min+1))+min
    array.push(randomNumber)
  }

  return array
}

module.exports = arrayGenerator
