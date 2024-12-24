function loadPosts() {
    document.getElementById("posts").innerHTML = "Carregando...";

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            // transformar em JSON
            return resultado.json(); // retorna uma promises, ou seja, precisa de um "then"
        })
        .then(function(json) {
            montarBlog(json);
        })
        .catch(function(error) {
            console.error("Não foi possível fazer a requisição \n " + error);
        })
}

function montarBlog(lista) {
    let html = '';

    for(let i in lista) {
        html += `<h3>${lista[i].title}</h3>`;
        html += `${lista[i].body} <br/>`;
        html += `<hr/>`;
    }

    document.getElementById("posts").innerHTML = html;
}