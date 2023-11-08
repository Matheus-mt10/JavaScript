function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var bg = window.document.getElementById('bg');
    var title = window.document.getElementById('title');
    var footer = window.document.getElementById('footer');

    //var data = new Date();
    //var hora = data.getHours();
    var hora = 22;
    

    if (hora>= 0 & hora <12) {
        //BOM-DIA
        msg.innerHTML = `Bom dia, agora são: ${hora} horas.`;
        title.style.color = 'black';
        footer.style.color = 'black';
        img.setAttribute('src','assets/manhar.png');
        bg.style.background = '#fce19c'
        
    } else if (hora >= 12 & hora < 18) {
        msg.innerHTML =  `Boa tarde!!! agora são: ${hora} horas.`;
        title.style.color = 'black';
        footer.style.color = 'black';
        img.setAttribute('src','assets/tarder.png');
        bg.style.background = '#ffce01'
    } else{
        msg.innerHTML = `Boa noite!! agora são: ${hora} horas.`;
        img.setAttribute('src','assets/noiter.png');
        bg.style.background = '#333'
        
    }

}