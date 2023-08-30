// TEMP: antes do nome da função que retorna uma promise (await) 09:28

async function clicou() {
    try {
        let req = await fetch('https://jsonplaceholder.typicode.com/posts'); // Vai esperar a requisição 
        if (!req.ok) {
            throw new Error(`Erro na requisição: ${req.status}`);
        }

        let convert = await req.json(); // Vai esperar a conversão | usar await aqui não é estritamente necessário, mas é uma boa prática ;)

        alert(`O título do primeiro post é: ${convert[0].title}`);
        alert("OPAA");
    } catch (erro) {
        console.log(`Ocorreu um erro: ${erro}`);
    }
}

async function Inserir() {
    let req = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Título de teste',
                body: 'Título de teste',
                userId: 2
            })
        }
    );

    let convert = await req.json();

    console.log(`O título do post é: ${convert.title}`);
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', Inserir);
