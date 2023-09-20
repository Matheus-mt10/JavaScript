var montante = 1000;
var juro = 0.13;
var tempo = 12;

var formula = montante*juro*tempo;

var juros = formula-montante;


console.log(`O valor total do juros é de: ${juros}. O montante é de: ${formula}`)
