let usuariosDiv = document.getElementById('usuarios');

fetch('usuarios.json')
  .then(response => response.json())
  .then(data => {
    let conteudo = "";

    data.usuarios.forEach(usuario => {
      conteudo += "Nome: <b>" + usuario.nome + "</b> - Idade: <b>" + usuario.idade + "</b>, CPF: <b>" + usuario.cpf + "</b>, Tel: <b>" + usuario.telefone +"</b><br>";
    });

    usuariosDiv.innerHTML = conteudo;
  });
