const prompt = require("prompt-sync")()

for (let i = 0; i < 5; i++) {
  const value = parseInt(prompt("Digite um valor: "))

  if (value) {
    for (let j = 1; j <= value; j++) {
      console.log(`${j} X ${value} = ${j * value}`)
    }
  } else {
    console.log("Digite um valor válido!")
  }
}
