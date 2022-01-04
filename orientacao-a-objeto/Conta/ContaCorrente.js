import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static _numeroDeContas = 0;
    
    static get numeroDeContas() {
        return ContaCorrente._numeroDeContas;
    }

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente._numeroDeContas++;
    }

    sacar(valorASacar) {        
        return super._sacar(1.1, valorASacar);
    }
}