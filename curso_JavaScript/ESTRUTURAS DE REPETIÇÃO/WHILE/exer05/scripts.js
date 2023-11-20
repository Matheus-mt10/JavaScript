var txt1 = window.document.getElementById("txt1");
var result = window.document.getElementById("result");
var aleatorio = Math.floor(Math.random()*10);

while(txt1 != aleatorio ){
    result.innerHTML=`${txt1}`
}

