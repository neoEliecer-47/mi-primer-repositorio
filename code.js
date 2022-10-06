document.querySelector('h3')//id es unico
console.log(document.querySelector('h3'))
console.log(document.querySelector('.h3-2'))
console.log(document.querySelector('#parrafo'))
console.log(document.getElementById('tituloCuentos'))
console.log(document.querySelectorAll('.h3-2'))

const parrafo = document.querySelector('#parrafo')
parrafo.textContent='El Retrato de Dorian Gray desde JS'
parrafo.innerHTML='<b>El Retrato de Dorian Gray desde JS</b>'

parrafo.classList.add('h3-2')

const lista= document.getElementById('lista')
console.log(lista)



const arrayElements = ['Novelas','Cuentos','Teatro']
arrayElements.forEach(item => {
    const li=document.createElement('li')
    li.textContent=item
    lista.appendChild(li)
})

const arrayE_ = ['Ensayos','Poemas en prosa','Cartas']
arrayE_.forEach(item =>{
    lista.innerHTML += `<li>${item}</li>`
})



const lista2 = document.getElementById('lista2')
const _array3 = ['La importancia de llamrse ernesto','El abanico de Lady Windermere','Un marido ideal']
const fragment = new DocumentFragment()

_array3.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
    console.log(fragment)
})

lista2.appendChild(fragment)


const lista_3 = document.querySelector('#lista3')
const arrayL = ['item1','item2','item3']
const fragmento = document.createDocumentFragment()

arrayL.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('list')
    const b=document.createElement('b')
    b.textContent='Nombre: '
    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent=item
    li.appendChild(b)
    li.appendChild(span)
    fragmento.appendChild(li)
})
//lista_3.appendChild(fragmento)
const lista_4 = document.querySelector('#lista4')
const template=document.querySelector('#template-li').content
const fragmentos = document.createDocumentFragment()
const array10 = ['uno','dos','tres']

array10.forEach(item => {
    template.querySelector('.list span ').textContent = item
    //template.querySelector('.text-danger').textContent = item
    //template.querySelector('span').textContent = item
    const clon = template.cloneNode(true)
    fragmentos.appendChild(clon)

})
lista_4.appendChild(fragmentos)