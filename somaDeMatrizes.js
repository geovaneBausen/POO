function somaDeMatrizes(matrix1, matrix2) {
    // Verificar se as matrizes têm o mesmo tamanho
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
      throw new Error("As matrizes devem ter o mesmo tamanho.");
    }
  
    // Criar a matriz de resultado
    const resultado = [];
  
    // Percorrer as linhas das matrizes
    for (let lin = 0; lin < matrix1.length; lin++) {
      // Criar a linha na matriz de resultado
      resultado[lin] = [];
  
      // Percorrer as colunas das matrizes
      for (let col = 0; col < matrix1[lin].length; col++) {
        // Somar os elementos das matrizes na posição atual
        resultado[lin][col] = matrix1[lin][col] + matrix2[lin][col];
      }
    }
  
    // Retornar a matriz de resultado
    return resultado;
  }
  
  // Matrizes de entrada
  const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  // Executar a função e exibir o resultado
  const resultado = somaDeMatrizes(matrix1, matrix2);
  console.log(resultado);