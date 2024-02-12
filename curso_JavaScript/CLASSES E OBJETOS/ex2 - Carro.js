// Crie uma classe Carro com métodos para ligar, desligar e verificar se o carro está ligado.

// fabricante,modelo,ano,cor,tanque

class Carro{
    constructor(fabricante,modelo,ano,cor,tanque,onOf,on,off) {
        this.fabricante = fabricante
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.tanque = tanque
        this.onOf = onOf
        this.on = on
        this.off = off

    }

    infoCarro(){
        console.log(`${this.fabricante} ${this.modelo} ${this.cor} ano ${this.ano} com capacidade de tanque de ${this.tanque} litro.`);
    }

    verificarLigado(){
        if (this.onOf==true) {

           console.log('O carro está ligado');
        }
        else{
            console.log('O carro está desligado');
        }
    }

    ligar()
}

let carro1 = new Carro("Volksvagem", "Novo Gol 1.6", 2014, "Prata", 55,false)

carro1.infoCarro()
carro1.verificarLigado()