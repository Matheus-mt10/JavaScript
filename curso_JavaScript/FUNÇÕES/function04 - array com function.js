/* Crie uma função chamada maiorNumero que receba um array de números como parâmetro e retorne o maior número desse array. */

function maiorNumero(num){
    return Math.max.apply(null,num)
}

 let num = [24,1,4,6]
console.log(maiorNumero(num));










