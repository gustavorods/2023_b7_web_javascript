function clicou() {
    
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao')

    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar Senha";
    }else {
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar senha";
    }
}

/*Se o type do input for text, transforme em senhra e muda o texto do botao para "mostrar senha" 
Caso a type não seja text(se não é text é passowrd), transforme em text e muda o texto do botão*/