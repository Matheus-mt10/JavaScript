class pcBuild{
    constructor(tipoPc,processador,ram){
        this.tipoPc = tipoPc
        this.processador = processador
        this.ram = ram
    }
        

    montarPc(){
        console.log(`A configuração do ${this.tipoPc} CPU:${this.processador}, RAM:${this.ram}`);
    }
}

let pc1 = new pcBuild ("Notebook", "R5 5450U", "8GB")
console.log(pc1);

pc1.montarPc()