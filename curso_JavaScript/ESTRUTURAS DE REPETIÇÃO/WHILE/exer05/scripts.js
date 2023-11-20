var txt1 = window.document.getElementById("txt1");
var result = window.document.getElementById("result");
var aleatorio = Math.floor(Math.random()*10);
var verificar = window.document.getElementById("verificar");

verificar.addEventListener("click", verificarAleatorio)

function verificarAleatorio() {

    while (txt1 != aleatorio) {
     result.innerHTML=aleatorio;   
    }

    result.innerHTML=`O número digitado é igual ao aleatório ${aleatorio}`

}



