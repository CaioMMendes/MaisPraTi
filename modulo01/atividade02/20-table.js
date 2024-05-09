const table = [
  { matricula: "ABC123", nome: "João", salarioBruto: 3000 },
  { matricula: "DEF456", nome: "Maria", salarioBruto: 3500 },
  { matricula: "GHI789", nome: "Pedro", salarioBruto: 2800 },
  { matricula: "JKL012", nome: "Ana", salarioBruto: 4000 },
]

function exercicio20() {
  const tableLength = table.length

  for (let index = 0; index < tableLength; index++) {
    const employee = table[index]
    const inss = employee["salarioBruto"] * 0.12
    const netSalary = employee["salarioBruto"] - inss
    console.log()
    console.log(`Contracheque do empregado ${index + 1}`)
    console.log(`Matrícula: ${employee["matricula"]}`)
    console.log(`Nome: ${employee["nome"]}`)
    console.log(`Salário bruto: ${employee["salarioBruto"]}`)
    console.log(`Dedução INSS: ${inss}`)
    console.log(`Salário líquido: ${netSalary}`)
    console.log()
  }
}

module.exports = exercicio20
