//base de dados
// Vetores de produtos, preços, quantidades e categorias
let vetProduto = ['arroz', 'feijão', 'ovos', 'tapioca', 'carne moida', 'leite', 'batata doce'];
let vetPrecos = [10, 8, 1, 8, 10, 8, 10];
let vetQuantidade = [10, 8, 1, 8, 10, 8, 10];
let vetCategoria = ['Almoço', 'Almoço', 'Café da Manhã', 'Lanche', 'Jantar', 'Café da Manhã', 'Almoço'];

//vetores para produtos excluidos
// Novos vetores para armazenar os itens excluídos
let vetProdutoExcluido = [];
let vetPrecoExcluido = [];
let vetQuantidadeExcluido = [];
let vetCategoriaExcluido = [];


// Seleciona os botõe  s e adiciona eventos
document.getElementById('btListar').onclick = exibirProdutos;
document.getElementById('btAdicionar').onclick = adicionarProdutos;
document.getElementById('btExcluir').onclick = function () {
    let indice = parseInt(document.getElementById('indiceExcluir').value);
    excluirProdutoPorIndice(indice);
}

// Função para exibir os produtos na tabela
function exibirProdutos() {
    var tabela = document.getElementById("minhaTabela");
    tabela.innerHTML = "";

    var thead = tabela.createTHead();
    var cabecalho = thead.insertRow();
    cabecalho.insertCell().textContent = "Produto";
    cabecalho.insertCell().textContent = "Preço";
    cabecalho.insertCell().textContent = "Quantidade";
    cabecalho.insertCell().textContent = "Categoria";
    cabecalho.insertCell().textContent = "Total";

    var tbody = tabela.createTBody();
    for (var i = 0; i < vetProduto.length; i++) {
        var linha = tbody.insertRow();
        linha.insertCell().textContent = vetProduto[i];
        linha.insertCell().textContent = `R$${vetPrecos[i]}`;
        linha.insertCell().textContent = vetQuantidade[i];
        linha.insertCell().textContent = vetCategoria[i];
        linha.insertCell().textContent = `R$${resultado[i]}`;
    }
}

// Função para adicionar novos produtos ao final do vetor
function adicionarProdutos() {
    var produto = document.getElementById('produto').value;
    var preco = parseFloat(document.getElementById('preco').value);
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var categoria = document.getElementById('categoria').value;

    if (produto && preco && quantidade && categoria) {
        vetProduto.push(produto);
        vetPrecos.push(preco);
        vetQuantidade.push(quantidade);
        vetCategoria.push(categoria);
        alert("Produto adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }

    // Limpar campos após adicionar
    limparEColocarCursor(document.getElementById('preco'));
    limparEColocarCursor(document.getElementById('quantidade'));
    limparEColocarCursor(document.getElementById('produto'));

    exibirProdutos()
}


function excluirProdutoPorIndice(indice) {
    // Verificar se o índice é válido, se está dentro do intervalo dos itens nos arrays.
    if (indice >= 0 && indice < vetProduto.length) {

        // Remover o item na posição especificada em cada vetor
        let produtoRemovido = vetProduto.splice(indice, 1);
        let precoRemovido = vetPrecos.splice(indice, 1);
        let quantidadeRemovida = vetQuantidade.splice(indice, 1);
        let categoriaRemovida = vetCategoria.splice(indice, 1);

        // Salvar os itens removidos nos vetores de excluídos

        vetProdutoExcluido.push(produtoRemovido[0]);
        vetPrecoExcluido.push(precoRemovido[0]);
        vetQuantidadeExcluido.push(quantidadeRemovida[0]);
        vetCategoriaExcluido.push(categoriaRemovida[0]);

        // Mostrar a tabela atualizada
        exibirProdutos();

        console.log("Itens Excluídos:");
        console.log("Produto Excluído:", vetProdutoExcluido);
        console.log("Preço Excluído:", vetPrecoExcluido);
        console.log("Quantidade Excluída:", vetQuantidadeExcluido);
        console.log("Categoria Excluída:", vetCategoriaExcluido);
    } else {
        console.log("Índice inválido.");
    }

    limparEColocarCursor(indiceExcluir)
}


function multiplicarVetores(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        console.log("Os vetores devem ter o mesmo tamanho.");
        return;
    }

    let resultado = [];

    for (let i = 0; i < vetor1.length; i++) {
        resultado.push(vetor1[i] * vetor2[i]);
    }

    return resultado;
}
let resultado = multiplicarVetores(vetPrecos, vetQuantidade);

console.log(resultado)



function exibiçãoComToString() {

}


//função limpa campo e adc cursor
function limparEColocarCursor(campo) {
    // Limpa o campo
    campo.value = "";

    // Coloca o cursor no campo
    campo.focus();
}

//função ordenar
//function filtrar por nome, preço e qtd





