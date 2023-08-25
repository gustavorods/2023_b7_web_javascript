    function clicou() 
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(`Status: ${response.status}`) 
                return response.json();     
            })
            .then((data) => {
                alert(`O título do primeiro post é: ${data[0].title}`);
            })
            .catch((erro) => {
                alert("Algo deu errado durante a requisição, abra o console para verificar"); // Alerta que aparecera pro usuário
                console.log(`O erro foi o seguinte: ${erro}`);
            });
    }
    function Inserir() 
    {
        fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: "POST", // Método de envio da requisição
                headers: {
                    'Content-Type': 'application/json', // A forma que eu vou enviar o body (conteúdo) do posto é atravez de um json
                },
                body: JSON.stringify({ // JSON.stringify = é usado para converter o objeto JavaScript em uma string JSON válida antes de enviá-lo como corpo da solicitação. 
                    title: 'Título de teste',
                    body: 'Título de teste',
                    userId: 2 // Autor / usuario
                    // Quando fizer a requisição, automaticamente ele vai criar um ID pra ela
                })   
            }
        )
        .then((response) => {
            return response.json(); // Transformando o json da resposta em um objeto
         })
         .then((data) => {
             console.log(data); // NÃO ESQUECE DE COLOCAR NO NOTION A FUNÇÕES DA ABA NETWORK DO DEV TOOLS (AULA DO BONIEKY)
         })
    }

    document.querySelector('#botao').addEventListener('click', clicou);
    document.querySelector('#inserir').addEventListener('click', Inserir); // Botão de inserir um Post
            