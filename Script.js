async function loadPosts() {
    document.getElementById("posts").innerHTML = "Carregando...";

    // Fazendo requisição 
    let req;
    try {
        req = await fetch('https://jsonplaceholder.typicode.com/posts');
    } catch (error) {
        console.log(`Erro ao fazer requisição \n ${error}`);
    }

    let json = await req.json();
    montarBlog(json);
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