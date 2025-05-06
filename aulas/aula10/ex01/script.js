let receba = document.querySelector("#subtitulo");

function alteraText() {
    receba.textContent = "de: isabela.";
    receba.style.color = "purple";
}
receba.onclick = alteraText;

let botao02 = document.querySelector("#botao-cores");

function alteraCores() {
    let cartao = document.querySelector(".cartao");
    cartao.style.background = "pink";
    document.body.style.backgroundColor = "#ffe0f0";
}

let botao = document.querySelector("#botao-confete");

function confetes() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
}

botao.onclick = confetes;
botao02.onclick = alteraCores;

