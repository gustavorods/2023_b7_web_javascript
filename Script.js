adicionar = function () {
    const ul = document.querySelector("ul");
    const input = document.querySelector("input");
    
    let novoItem = document.createElement("li");
    novoli.innerText = input;

    ul.appendChild(novoli)

}

const input = document.querySelector("input");
input.addEventListener("keyup", adicionar);
