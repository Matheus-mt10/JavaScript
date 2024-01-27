/* Crie um array com as notas de um aluno em cinco disciplinas. Calcule a média das notas e exiba se o aluno foi aprovado (média maior ou igual a 6) ou reprovado (média abaixo de 6). */


let notas = [8,10,6,8,7]
let soma = 0


for(let cont=0;cont<notas.length;cont++){
    soma+=notas[cont]
}

let media=soma/5
if(soma<6){
    console.log(`A média foi inferior a 6, portanto o aluno foi REPROVADO. Média: ${media}.`);
}else{
    console.log(`A média foi superior a 6, portanto o aluno foi APROVADO. Média: ${media}.`);
}

