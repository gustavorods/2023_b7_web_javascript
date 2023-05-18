function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');

   let novoli = document.createElement("li"); //aqui ele cria um novo elemento <li>, mas pode ser h1, etc.
    novoli.innerText = "item adicionado";   //aquu ele "decide" que o novoli (nome da variavel) vai receber um valor de texto, por isso "text"

    ul.appendChild(novoli) //aqui o appendChild adiciona o novoli
}