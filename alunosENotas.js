matriz =[
    [8, 9, 7],
    [6, 7, 8],
    [9, 8, 10],
  ]

for (let aluno = 0; aluno < matriz.length; aluno++) {
    let somaNotas = 0;
  
    for (let nota = 0; nota < matriz[aluno].length; nota++) {
      somaNotas += matriz[aluno][nota];
    }
  
    let media = somaNotas / matriz[aluno].length;
  
    console.log(`Média do aluno ${aluno + 1}: ${media}`);
  }