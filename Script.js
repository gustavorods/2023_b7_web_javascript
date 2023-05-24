function clicou() {
    const botao = document.querySelector('button');

    if(botao.classList.contains('azul')) {
        botao.classList.replace('azul', 'verde')
    }else {
        botao.classList.replace('verde', 'azul')
    }

    console.log(botao.classList); //mostra a lista de class
}
