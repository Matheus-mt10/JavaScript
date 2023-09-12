var operacao = "*";
var n1 = 10;
var n2 = 10;
var res;

if (operacao == "+") {
    res= n1+n2;
    console.log(`A operação escolhida foi a soma que resulta em ${res}`)
} 
else if (operacao == "-"){
    res=n1-n2;
    console.log(`A operação escolhida foi a subtração que resulta em ${res}`)
}
else if (operacao == "/"){
    res=n1/n2;
    console.log(`A operação escolhida foi a divisão que resulta em ${res}`)
}

else if (operacao == "*"){
    res=n1*n2;
    console.log(`A operação escolhida foi a multiplicação que resulta em ${res}`)
}

else{
    console.log("Escolha uma operação válida")
}