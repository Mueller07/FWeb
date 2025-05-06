let cursosContainer = document.getElementById('cursos');

fetch('cursos.json')
  .then(res => res.json())
  .then(data => {
    let conteudo = "";

    for (let curso in data) {
      conteudo += "<h2>" + curso + "</h2> <ul>";
      data[curso].forEach(aluno => {
        conteudo += "<li>" + aluno + "</li>";
      });
      conteudo += "</ul>";
    }

    cursosContainer.innerHTML = conteudo;
  });
