function controlar_cadastro() {
    alert("cadastrando")
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;
    let imagem = document.querySelector('#imagem').value;
    let texto = document.querySelector('#texto').value;
    let dataNoticia = document.querySelector('#data').value;
    let noticia = {
        titulo: titulo,
        autor: autor,
        imagem: imagem,
        texto: texto,
        dataNoticia: dataNoticia 
    };
    return noticia
}
function mostrar_lista(noticias) {
    let mensagem = '';
    let id = 0;
    let tbody = document.querySelector('#tbody')
    for (let noticia of noticias) {
        let linha = document.createElement('tr')
        let coluna = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let coluna4 = document.createElement('td')
        let coluna5 = document.createElement('td')
        let coluna6 = document.createElement('td')
        let coluna7 = document.createElement('td')
        coluna.innerText = id
        coluna2.innerText = noticia.titulo
        coluna3.innerText = noticia.autor
        coluna5.innerText = noticia.imagem
        coluna6.innerText = noticia.texto
        coluna7.innerText = noticia.dataNoticia
        linha.appendChild(coluna)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        linha.appendChild(coluna5)
        linha.appendChild(coluna6)
        linha.appendChild(coluna7)
        tbody.appendChild(linha)
        id++;
    }
    alert(mensagem);
}
