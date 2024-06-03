const allStudents = [
  {
    firstName: "João",
    lastName: "Lima",
    scoreOne: 5.5,
    scoreTwo: 8.5,
    gender: "m",
  },
  {
    firstName: "Fernando",
    lastName: "Nogueira",
    scoreOne: 4,
    scoreTwo: 6.3,
    gender: "m",
  },
  {
    firstName: "Marlene",
    lastName: "Almeida",
    scoreOne: 9,
    scoreTwo: 9.3,
    gender: "f",
  },
  {
    firstName: "Mirella",
    lastName: "Dantas",
    scoreOne: 8.98,
    scoreTwo: 5,
    gender: "f",
  },
  {
    firstName: "Jefferson",
    lastName: "Magnani",
    scoreOne: 5,
    scoreTwo: 6.9,
    gender: "m",
  },
]

// Calcular a média do aluno
const mediaApproval = (n1, n2) => ((Number(n1) + Number(n2)) / 2).toFixed(2)

for (index = 0; index < allStudents.length; index++) {
  let note = mediaApproval(
    allStudents[index].scoreOne,
    allStudents[index].scoreTwo
  )
  let student = allStudents[index].firstName
  let studentLastName = allStudents[index].lastName
  let gender = allStudents[index].gender == "f" ? "a" : "o"
  let returnResponse = `A Média d${gender} alun${gender} ${student} ${studentLastName} é: ${note}\n`
  if (note >= 7) {
    returnResponse += `Parabéns ${student}, Você foi aprovad${gender} no concurso!`
  } else {
    returnResponse += `Não foi dessa vez, ${student}! Tente Novamente!`
  }
  alert(returnResponse)
}
