let nomes= ["Matheus ", "Camila ", "Fátima "]
let idades = [24,22,53]
let soma=0
var usaNome = ""

for(let cont=0; cont<idades.length;cont++){
   soma+=idades[cont]
   var media = soma/3
}

for(let i=0;i<nomes.length;i++){
    usaNome+= nomes[i]
}

console.log(usaNome)
console.log(`A média de idade de ${usaNome} é: ${media}`)
