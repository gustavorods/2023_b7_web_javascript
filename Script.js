function clicou() {
    console.log("Clicou no botão");
}

let botao = document.querySelector('.botao'); //selecionando o elemento
botao.addEventListener("click", clicou()); //addEventListener = escutador de eventos