function verificarMaior(numeros){
    return Math.max.apply(null, numeros)
}

let numeros = [1,154,7,7880,1000,5]
console.log(verificarMaior(numeros));