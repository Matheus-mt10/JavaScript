/* Crie um array com números de 1 a 10. Utilize um loop para exibir apenas os números pares do array no console.*/

var num = [1,2,3,4,5,6,7,8,9,10]

for(var cont=0;cont<num.length;cont++){
    if(num[cont]%2==0){
        console.log(num[cont])
    }

}