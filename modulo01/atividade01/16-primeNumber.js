let count = 0
let start = 101

while (count < 50) {
  let prime = false
  let divide = 2

  while (prime === false && divide < start) {
    if (start % divide === 0) {
      prime = true
    }
    divide++
  }

  if (prime === false) {
    console.log(start)
    count++
  }
  start++
}
