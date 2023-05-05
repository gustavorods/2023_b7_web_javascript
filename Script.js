function clicou() {
    const teste = document.querySelector("#teste");
    //console.log(teste.children); //vai mostrar o que tem dentro da div, mas não vai mostrar o li, pq o ul é filho da div, mas o li nao, a forma correta seria:
    console.log(teste.children[0].children) //o children retorna uma array 
}
