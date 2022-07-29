
const burger =document.querySelector('.burger')

function visualizarLista(){
    const lista = document.querySelector('.lista')
    const listaLi = document.querySelectorAll('.lista__li')
    console.log(listaLi)
    lista.classList.toggle('lista__activada')
    burger.classList.toggle('toogle')

    listaLi.forEach((li, index) => li.style.transition = `all ${2*index + 2}s`)
}

burger.addEventListener('click', visualizarLista)