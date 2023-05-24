function clicou() {
    const botao = document.querySelector('button');

    botao.classList.add('verde') //adicionar a class
    botao.classList.remove('azul') //remover a class

    console.log(botao.classList); //mostra a lista de class
}
