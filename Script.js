function mostrar() {
    let imagem = document.getElementById("imagem").files[0]; 
    
    let img = document.createElement('img'); // Cria dinamicamente um elemento <img>
    img.src = URL.createObjectURL(imagem); // Define a URL temporária do arquivo selecionado como a fonte da imagem
    img.width = 200; // Ajusta a largura da imagem para 200 pixels

    // Adiciona o elemento <img> criado ao elemento com id "area"
    // Não usamos innerHTML aqui porque ele substitui todo o conteúdo existente e cria os elementos diretamente como texto HTML.
    // Como estamos criando o elemento com createElement, o correto é usar um método que insira o nó diretamente na árvore DOM, como appendChild.
    document.getElementById("area").appendChild(img);
}
