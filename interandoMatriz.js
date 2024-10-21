
/*
function clickBotao() {
    var linhas = document.getElementById('InLinhas').value
    var colunas = document.getElementById('InColunas').value

    alert(linhas);
    alert(colunas);
  }
*/

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const linhas = Number(document.getElementById('linhas').value);
  const colunas = Number(document.getElementById('colunas').value);

  if (linhas <= 0 || colunas <= 0) {
    alert('Os valores de linhas e colunas devem ser maiores que zero.');
    return;
  }

  const matriz = criaMatriz(linhas, colunas);
  mostraMatriz(matriz);
});

function criaMatriz(linhas, colunas) {
  const matriz = [];

  for (let linha = 0; linha < linhas; linha++) {
    matriz[linha] = [];

    for (let coluna = 0; coluna < colunas; coluna++) {
      matriz[linha][coluna] = `${linha}.${coluna}`;
    }
  }

  return matriz;
}

function mostraMatriz(matriz) {
  const divMatriz = document.getElementById('matriz');

  let tabela = '<table>';

  for (let linha = 0; linha < matriz.length; linha++) {
    tabela += '<tr>';

    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      tabela += `<td>${matriz[linha][coluna]}</td>`;
    }

    tabela += '</tr>';
  }

  tabela += '</table>';

  divMatriz.innerHTML = tabela;
}