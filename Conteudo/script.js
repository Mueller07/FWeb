function validaBuscar(){
    if(document.querySelector('#inputlupa').value == ''){
        alert('Insira um valor para buscar');
    return false;
}
}
let barraBusca = document.querySelector('#form-busca').onsubmit = validaBuscar;
 