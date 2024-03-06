const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')


btn1.addEventListener('click', ()=>{
    //pega o valor do input
    const campoUsuario = document.querySelector('#filmeInput').value
    //criaum novo item de lista
    const itemLista = document.createElement('li')
    //adiciona o item a lista
    listaFilmes.append(itemLista)
    //adiciona conteudo a lista
    itemLista.innerHTML = `<strong>${campoUsuario}</strong>`
    //muda o estilo
    itemLista.style.backgroundColor = 'red'
    //adiciona uma classe
    itemLista.classList.add('ativo')
    //liga/desliga uma classe
    itemLista.classList.toggle('ativo')
})

//window.onload - quando a pagina carregar, faça...