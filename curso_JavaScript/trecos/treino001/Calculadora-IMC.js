var peso = 155;
var altura = 1.20;
var imc= peso/(altura*altura);

if (imc <= 1.85) {
    console.log("você está abaixo do peso. IMC abaixo de 1.85");
}else if( imc >= 1.86 && imc <= 24.9){
    console.log(`você está no peso Ideal (Parabéns ). IMC atual de ${imc}`);
}
else if( imc >= 25.0 && imc <=29.9){
    console.log(`você está levemente acima do peso Ideal . IMC atual de ${imc}`);
}
else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`você está com Obesidade de grau 1. IMC atual de ${imc}`);
} 

else if(imc >= 35.0 && imc <= 39.9){
    console.log(`você está ncom ebesidade grau 2 (Severa). IMC atual de ${imc}`);
}

else{
    console.log(`você está com obesidade grau 3 (Mórbida - Grave ). IMC atual de ${imc}`);
}