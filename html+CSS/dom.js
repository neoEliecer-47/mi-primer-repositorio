const liTemplate = document.querySelector('#liTemplate')

const elemento = document.getElementById('unico')

elemento.style.backgroundColor = 'black'
elemento.style.color = 'white'

const boton = document.querySelector('.btn-primary')

console.log(boton)



const lista = document.querySelector('#lista')

const arrayPaises = ['Noruega','venezuela','chile','panamá']
const array2 = ['Nigeria','senegal','sudafrica']
const fragment = document.createDocumentFragment()

/*arrayPaises.forEach(paises => {
    const li = document.createElement('li') //mejor esta que inner html
    li.textContent = paises
    lista.appendChild(li)
    
})*/

//array2.forEach(paises => {
  //  lista.innerHTML += `<li>${paises}</li>`

//})

/*array2.forEach(paises => {
    const li = document.createElement('li') //mejor esta que inner html
    li.textContent = paises
    fragment.appendChild(li)
})

lista.appendChild(fragment)*/

arrayPaises.forEach(paises => {
    const li = document.createElement('li')
    li.className = 'list'
    const bold = document.createElement('b')
    const span = document.createElement('span')
    span.className = 'text-primary'

    bold.textContent = 'Pais: '
    span.textContent = paises
    
    li.appendChild(bold)
    li.appendChild(span)
    fragment.appendChild(li)
    

})
lista.appendChild(fragment)


let template = ''

/*array2.forEach(paises => {

    template += `<li class="list">
    <b>Pais: </b>
    <span class="text-primary">${paises}</span>
    </li>`

})
lista.innerHTML = template*/



//const clon = liTemplate.content.cloneNode(true)



//clon.querySelector('.text-primary').textContent = 'texto desde js en template'
//lista.appendChild(clon)



const clickPaises = (e) => console.log('diste click en paises', e.target)

arrayPaises.forEach(paises => {
    const clon = liTemplate.content.firstElementChild.cloneNode(true)
    clon.querySelector('span').textContent = paises

    clon.addEventListener('click', clickPaises)
    fragment.appendChild(clon)
})
lista.appendChild(fragment)

//QUÉ BUENO QUE SOY JODER