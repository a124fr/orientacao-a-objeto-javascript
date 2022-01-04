console.log("Trabalhando com condicioais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
const cidades = ["Salvador", "São Paulo", "Rio de Janeiro"];

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

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
    temPassagemComprada = true;
} else {
    console.log("Não é maior de idade, não posso vender");
    temPassagemComprada = false;
}

console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let destinoExiste = false;
/*
let contador = 0;
while(contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe!");
        destinoExiste = true;
        break;
    }
    contador++;
}*/

for(let contador = 0; listaDeDestinos.length; i++) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe!");
        destinoExiste = true;
        break;
    }
}

console.log("Destino Existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}