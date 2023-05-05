function clicou() {
    const teste = document.querySelector("#teste"); //selecionando a div
    const ul = teste.querySelector('ul'); //selecionando o ul

    ul.children[0].innerHTML = "item <strong>alterado</strong>" //pegando o primeiro li e modificando seu texto
}
