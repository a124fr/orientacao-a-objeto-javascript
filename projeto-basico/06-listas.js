console.log("Trabalhando com listas");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
const cidades = ["Salvador", "São Paulo", "Rio de Janeiro"];

//for(let chave in cidades) {
//    console.log(cidades[chave]);
//}

listaDeDestinos.push("Curitiba");   
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);

listaDeDestinos.splice(2, 0, "Bahia");
//console.log(listaDeDestinos);
