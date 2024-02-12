//  Crie uma classe ContaBancaria com métodos para depositar, sacar e verificar o saldo.
class ContaBrancaria{
    constructor(contaCorrente){
        this.contaCorrente = contaCorrente
    }

    deposito(valorDeposito){
        let contaCorrente = this.contaCorrente
        let saldo = contaCorrente+valorDeposito 
        console.log(`O depósito no valor ${valorDeposito}R$ foi realizado com sucesso. saldo da conta:${saldo}`);
    }

    sacar(valorSaque, saldo=0){
        let contaCorrente=this.contaCorrente
        saldo = contaCorrente-valorSaque
        console.log(`O saque no valor de ${valorSaque}R$ foi realizado com sucesso. Saldo da conta: ${saldo}R$`);
    }
    
}
   
let contaItau01 = new ContaBrancaria(100)

console.log(contaItau01);
contaItau01.sacar(10)
contaItau01.deposito(10)