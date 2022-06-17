let noticias = [];
function adicionar(noticias, noticia) { 
    noticias.push(noticia);
}
function alterar(noticias, noticia, id) {
    noticias[id] = noticia
}
function deletar(noticias, id) {
    noticias.splice(id, 1)
}
function listar(noticias, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(noticias)
    }, 1000);
    })
}
async function controlar_lista(noticias) {
    let lista = await listar(noticias) 
        mostrar_lista(lista)
}
function mostrar_edicao(noticia) {
    let titulo = prompt(`titulo da noticia? [${noticia.titulo}]`); 
    if (titulo == '') {
        titulo = noticia.titulo        
    } 
    let autor = prompt(`nome do autor? [${noticia.autor}]`);
    if (autor == '') {
        autor = noticia.autor        
    }
    let imagem = prompt(`imagem de referencia? [${noticia.imagem}]`);
    if (imagem == '') {
        imagem = noticia.imagem        
    }
    let texto = prompt(`Texto da noticia? [${noticia.texto}]`);
    if (texto == '') {
        texto = noticia.texto        
    }
    let dataNoticia = prompt(`data de publicação? [${noticia.dataNoticia}]`);
    if (dataNoticia == '') {
        dataNoticia = noticia.dataNoticia        
    }
    let noticiaNova = {
        titulo: titulo,
        autor: autor,
        imagem: imagem,
        texto: texto,
        dataNoticia: dataNoticia
    };
    return [noticiaNova, id]
    
}
function mostrar_delete() {
    let id = parseInt(prompt('Qual id quer apagar?'))
    return id 
}

function cadastrar(noticias) {
    let noticia = controlar_cadastro()
    adicionar(noticias, noticia)
}
//model
function mostrar_lista(noticias) {
    //view
    let mensagem = '';
    let id = 0;
    for (let noticia of noticias) {
        mensagem += id + ': ' + noticias.titulo + ' - ' + noticia.autor + '\n' + noticia.imagem + '\n' + noticia.texto + '\n' + noticia.dataNoticia + '\n';
        id++ ;
    }
    alert(mensagem);
}   
function editar(noticias) {
    controlar_lista(noticias)
    //control and view
    noticias = listar(noticias);
    mostrar_lista(livros)
    
}  
function apagar(noticias) {
    controlar_lista(noticias)
    //control and view
    let id = mostrar_delete() 
    //model
    deletar(noticias, id)
    
}
function menu() {
    loop:
        while (true) {
            //view
            alert('1:cadastrar Noticia\n2:lista\n3:editar\n4:apagar\n5:sair');
            //control and view
            opcao = prompt('');
            //control
            switch (opcao) {
                case '1': 
                    cadastrar(noticias)
                    break
                case '2': 
                    mostrar_lista(noticias)
                    break
                case '3':
                    editar(noticias)
                    break
                case '4':
                    apagar(noticias)
                    break      
                case '5': 
                    alert('sair')
                    break loop;
            }
        }
}