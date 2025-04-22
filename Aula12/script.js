alert('bem-vindos a interatividade turma 24-1t');

let titulo = document.querySelector("#titulo");//funcao de busca document.querySelector
titulo.textContent = "Hello Word!";
titulo.style.color="red";

function mostraAlerta(){
    alert("Funciona!");
}

titulo.onclick = mostraAlerta

function mostraTexto(texto){
    alert(texto);
}

mostraTexto("Feliz Páscoa!");
