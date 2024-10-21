        /*Metodos de inclusão e exclusão de itens

push()Adciona um elemento ao final do vetor
unshift()Adciona um elemento ao inicio e desloca os demais uma posição baixo
pop()Remove o ultimo elemento
shift()Remove o primeiro elemento do vetor e desloca os elemntos existentes uma posição acima
*/

var cidades = ["Cidades"]; // declara e define conteúdo inicial do vetor
console.log(cidades)

cidades[0] = "Pelotas"
cidades.push("São Lourenço"); // adiciona cidade ao final do vetor
cidades.push("São Lourenço");
cidades.push("Santa Teresa");

cidades[0] = "Pelotas"
cidades[1] = "São Lourenço";

cidades.unshift("Porto Alegre"); // adiciona ao início e desloca as demais
/*
// cidades[0] = "Porto Alegre"
// cidades[1] = "Pelotas"
// cidades[2] = "São Lourenço";
var retirada = cidades.pop(); // remove a última cidade do vetor
// cidades[0] = "Porto Alegre"
// cidades[1] = "Pelotas"
retirada = cidades.shift(); // remove a primeira e "sobe" as demais
*/