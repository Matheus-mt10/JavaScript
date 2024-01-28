/*Crie uma função chamada calcularAreaRetangulo que receba a base e a altura de um retângulo como parâmetros e retorne a área desse retângulo.

Fórmula: A= b*a
*/

function calcularAreaRetangulo(base,altura) {
    
    let area = base*altura
    return area
    
}

console.log(`A área do retângulo é: ${calcularAreaRetangulo(12,5)}CM`);