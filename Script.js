function loadPosts() {
    document.getElementById("posts").innerHTML = "Carregando...";

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            // transformar em JSON
            return resultado.json(); // retorna uma promises, ou seja, precisa de um "then"
        })
        .then(function(json) {
            document.getElementById("posts").innerHTML = json.length + "posts";
        })
        .catch(function(error) {
            console.error("Não foi possível fazer a requisição \n " + error);
        })
}