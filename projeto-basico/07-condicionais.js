console.log("Trabalhando com condicioais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
const cidades = ["Salvador", "São Paulo", "Rio de Janeiro"];

const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos possíveis");
listaDeDestinos.push("Curitiba");   
console.log(listaDeDestinos);
//if (idadeComprador >= 18) {
//    console.log("Comprador maior de idade");
//    listaDeDestinos.splice(1, 1);
//} else if (estaAcompanhada) {
//    console.log("Comprador está acompanhado");
//    listaDeDestinos.splice(1,1);
//} else {
//    console.log("Não é maior de idade, não posso vender");
//}

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Não é maior de idade, não posso vender");
}

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador < 3) {
    console.log(listaDeDestinos[contador]);
    contador++;
}
