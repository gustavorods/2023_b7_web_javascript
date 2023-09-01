// TEMP: await vem antes do nome da função que retorna uma promise (await) | corte bonieky sobre: 09:28
// TEMP: Não esequecer de anotar no notion sobre o Status 0 (dominio não encontrada)
// TEMP: por que "/post" o método não é GET?

async function clicou() {
    try {
        let req = await fetch('https://jsonplaceholder.typicode.com/posts'); // Vai esperar a requisição 
        if (!req.ok) {
            throw new Error(`Erro na requisição: ${req.status}`);
        }
        
        let convert = await req.json(); // Vai esperar a conversão 

        alert(`O título do primeiro post é: ${convert[0].title}`);
        alert("OPAA");
    } 
    catch (error) {
        console.error("Ocorreu um erro:", error);
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
    console.log(`oi`);
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', Inserir);
