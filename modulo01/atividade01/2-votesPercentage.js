const prompt = require("prompt-sync")()

const voters = parseInt(prompt("Digite a quantidade de eleitores: "))
const whiteVotes = parseInt(prompt("Digite a quantidade de votos brancos: "))
const nullVotes = parseInt(prompt("Digite a quantidade de votos nulos: "))
const validVotes = parseInt(prompt("Digite a quantidade de votos válidos: "))

const whiteVotesPercentage = (whiteVotes / voters) * 100
const nullVotesPercentage = (nullVotes / voters) * 100
const validVotesPercentage = (validVotes / voters) * 100

console.log("----------------------------------------------")
console.log(`Percentual de votos brancos: ${whiteVotesPercentage}`)
console.log(`Percentual de votos nulos: ${nullVotesPercentage}`)
console.log(`Percentual de votos válidos: ${validVotesPercentage}`)
