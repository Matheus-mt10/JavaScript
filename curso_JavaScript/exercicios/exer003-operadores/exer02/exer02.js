var pais = window.document.getElementById('txp');
var resultado = window.document.getElementById('resultado');


// eslint-disable-next-line no-unused-vars
function calc() {

    if (pais ==='Brasil') {
        resultado.innerHTML = `Você é Brasileiro ou Brasileira :) `
    }
    else{
        resultado.innerHTML = `Você Estrangeiro ou Estrangeira :) `
    }
}