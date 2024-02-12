//  Crie uma classe ContaBancaria com métodos para depositar, sacar e verificar o saldo.
class ContaBrancaria{
    constructor(saldoEmConta=0,sacar=0,depositar=0,verificarSaldo=0){
        this.saldoEmConta = saldoEmConta
        this.sacar = sacar
        this.depositar = depositar
        this.verificarSaldo = verificarSaldo
    }
}

let teste = new ContaBrancaria()