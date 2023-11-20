var txtn1 = window.document.getElementById("txtn1");
var txtn2 = window.document.getElementById("txtn2");
var result = window.document.getElementById("result")
var botaoSomar = window.document.getElementById("botaoSomar");


botaoSomar.addEventListener("click", Somar)

function Somar() {

    var num1= parseFloat(txtn1)
    var num2= parseFloat(txtn2);
    var soma = num1+num2;
    soma = parseFloat(soma);
    
    result.innerHTML = `<p>O resultado da soma é:   </p>${soma} `
}
