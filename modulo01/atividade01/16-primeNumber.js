let count = 0
let start = 101

while (count < 50) {
  let isPrimeNumber = true
  let divide = 2

  while (isPrimeNumber === true && divide < start) {
    if (start % divide === 0) {
      isPrimeNumber = false
    }
    divide++
  }

  if (isPrimeNumber === true) {
    console.log(start)
    count++
  }
  start++
}
