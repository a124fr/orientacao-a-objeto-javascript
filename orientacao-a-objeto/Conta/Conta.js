import { Cliente } from "./../Cliente.js";

export class Conta {
    // proposta que está sendo feita para uma sintaxe de campos privados dentro do JS.
    // https://github.com/tc39/proposal-class-fields#private-fields
    #saldo = 0;
    
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this.#saldo;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não pode instanciar diretamente um objeto do tipo Conta, pois essa é uma classe abstrata.");
        }

        this.#saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    /*
    sacar(valorSacado) {        
        if (this.saldo >= valorSacado) {
            this.#saldo -= valorSacado;

            return valorSacado;
        }

        return 0;
    }*/
    sacar(valorSacado) {        
        throw new Error("O método sacar da conta é abstrato.");
    }

    _sacar(taxa, valor) {
        let valorASacar = taxa * valor;
        if (this.saldo >= valorASacar) {
            this.#saldo -= valorASacar;

            return valorASacar;
        }

        return 0;
    }

    depositar(valorADepositar) {
        if (valorADepositar <= 0) {
            return;
        }

        this.#saldo += valorADepositar;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}