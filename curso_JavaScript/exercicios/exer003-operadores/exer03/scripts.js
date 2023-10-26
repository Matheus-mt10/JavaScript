function verificar() {
    nome = window.document.getElementById('txname');
    resultado = window.document.getElementById('result');

    if (nome = 'matheus') {
        resultado.innerHtml = `O nome do usuário é Matheus`;
    } else{
        resultado.innerHtml = `O nome do usuário não é Matheus`;
    }

}