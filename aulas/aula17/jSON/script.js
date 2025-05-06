let nome1 = "";
let cidade = "";

let paragrafo = document.getElementById("lista-objetos");

fetch("./pessoas.json")
.then(response => response.json())
.then(listarPessoas =>{
    let pessoas = listarPessoas.pessoas;
    let conteudo = "";

    pessoas.forEach(pessoa => {
      conteudo += `Nome: <b>${pessoa.nome}</b> - Cidade: <b>${pessoa.local.cidade}</b><br>`;
    });

    paragrafo.innerHTML = conteudo;
  });


  

