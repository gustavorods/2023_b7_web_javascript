function clicou() 
{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();     
        })
        .then((data) => {
            alert(`O título do primeiro post é: ${data[0].title}`);
        })
        .catch((erro) => {
            alert("Algo deu errado durante a requisição, abra o console para verificar"); // Alerta que aparecera pro usuário
            console.log(`O erro foi o seguinte: ${erro}`);
        })
        .finally(() => {
            alert("Deu tudo certo ou tudo errado? risos.")
        })
        
        

}

document.querySelector('#botao').addEventListener('click', clicou);
