const prompt = require("prompt-sync")()

let number = parseFloat(prompt("Digite um número: "))

// if (number || number === 0) {
//     let sum = 0
//     let count = 0
//     while (number !== 0) {
//         if (count > 0) {
//             number = parseFloat(prompt("Digite um número: "))
//         }
//         if (number || number === 0) {
//             if (number !== 0) {
//                 sum += number
//                 count++
//             }
//         } else {
//             console.log('Digite um número válido')
//             break
//         }
//     }
//     if (number === 0) {
//         console.log(`A média aritmética é de: ${sum / (count === 0 ? 1 : count)}`) //dividir 0/0 da NaN
//     }
// } else {
//     console.log('Digite um número válido')
// }

let sum = 0
let count = 0
while (number !== 0) {
  while (count > 0) {
    number = parseFloat(prompt("Digite um número: "))
    break
  }
  while (number || number === 0) {
    while (number !== 0) {
      sum += number
      count++
      break
    }
    break
  }
}
while (number === 0) {
  console.log(`A média aritmética é de: ${sum / (count === 0 ? 1 : count)}`) //dividir 0/0 da NaN
  break
}
