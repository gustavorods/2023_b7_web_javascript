async function enviar() {
    let arquivo = document.getElementById("arquivo").files;

    let body = new FormData();
    body.append('title', 'blabla');
    body.append('arquivo', arquivo);

    let req = await fetch("https://blablalba,com.br/upload", {
        method: 'POST',
        body: body, 
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

