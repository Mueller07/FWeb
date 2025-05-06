let lista = document.getElementById("lista-objetos");

fetch("./objetos.json")
  .then(response => response.json())
  .then(dados => {
    let conteudo = "";

    dados.objetos.forEach(item => {
      conteudo += "<li>" + item + "</li>";
    });

    lista.innerHTML = conteudo;
  });
