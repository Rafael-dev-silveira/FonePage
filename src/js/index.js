function slider(imageName) {
    // Seleciona a imagem principal
    const mainImage = document.querySelector('.home-img img');
    // Atualiza o atributo src com a nova imagem
    mainImage.src = `./src/img/${imageName}`;
}

