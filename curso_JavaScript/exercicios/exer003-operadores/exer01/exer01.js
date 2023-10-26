
var txvel = window.document.getElementById('txvel');
var vel = Number(txvel.value);
var resultado = window.document.getElementById('resultado');

function consultar() {

    if (vel > 60) {
        resultado.innerHTML = `<p> Sua velocidade é de: ${vel} e vocÊ foi MULTADO <BR>
        Precisa dirijir com mais cuidado!!!!
        </p>`;
    }
    
    resultado.innerHTML = `<p> Sua velocidade é de: ${vel} </p>`;
}
