// TEMP: por que "/post" o método não é GET?
// TEMP: get puxando id

async function clicou() {
    try {
        let req = await fetch('https://jsonplaceholder.typicode.com/posts'); // Vai esperar a requisição 
        if (!req.ok) { // Vende se a requisição deu errado 
            throw new Error(`Erro na requisição: ${req.status}`);
        }
        
        let convert = await req.json(); /* Usar "await" aqui é recomendado em contexto assíncrono. Sem ele, a função continua antes da conclusão da chamada, 
        causando resultados imprevisíveis, pois "req.json()" é uma promessa. Com "await", o código espera pela resolução da promessa, garantindo que "convert" 
        seja definido corretamente antes de prosseguir, vital em ambientes assíncronos. */

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