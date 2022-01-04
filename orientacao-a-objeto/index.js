import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

//const conta = new Conta(1, cliente1, 1002);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaCorrenteRicardo);
// console.log(contaCorrenteRicardo.saldo);
// console.log(contaPoupanca);
// console.log(contaPoupanca.sacar(10));
// console.log(contaPoupanca.saldo);
// console.log(contaSalario);
// console.log(contaSalario.saldo);

const diretor = new Diretor("Rodrigo", 1000, 12345678900);
diretor.cadastrarSenha("123456789")

const gerente = new Gerente("Ricardo", 5000, 12345617801);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 7894569191, "456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
//console.log(diretorEstaLogado, gerenteEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);


