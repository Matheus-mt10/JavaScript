var square = window.document.getElementById("square");

square.addEventListener("mouseenter", Entrou);
square.addEventListener("mouseout", Saiu);
square.addEventListener("click", Clicou);

function Entrou() {
    square.style.backgroundColor = "tomato";
    square.innerHTML = `<p>Entrou</p>`
}

function Saiu() {
    square.style.backgroundColor = "#333";
    square.innerHTML = `<p>Interaja...</p>`
}

function Clicou() {
    square.style.backgroundColor = "Green"
    square.innerHTML = `<p>Clicou</p>`
}