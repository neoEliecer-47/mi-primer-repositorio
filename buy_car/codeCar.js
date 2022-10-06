const cartas = document.getElementById('cartas')
const templateCArd = document.getElementById('template-card').content
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito={}

document.addEventListener('DOMContentLoaded',()=> {
    fetchData()
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

cartas.addEventListener('click', e =>{
    addCarrito(e)
})

items.addEventListener('click', e => {
    btnAccion(e)
})



const fetchData = async () => {
    try {
        
    const res = await fetch('api.json')
    const data= await res.json()
    //console.log(data)
    pintarcartas(data)
    
    } catch (error) {
        console.log(error)
    }
}

const pintarcartas = data =>{
    data.forEach(producto => {
        templateCArd.querySelector('h5').textContent = producto.title
        templateCArd.querySelector('p').textContent= producto.precio
        templateCArd.querySelector('img').setAttribute("src",producto.thumbnailUrl)
        templateCArd.querySelector('.btn-dark').dataset.id= producto.id
        //console.log(r)
        
        const clon = templateCArd.cloneNode(true)
        fragment.appendChild(clon)
        
    });
    cartas.appendChild(fragment)

}

const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-dark'))
    if(e.target.classList.contains('btn-dark')){
        
        setCarrito(e.target.parentElement)
    }
e.stopPropagation()
}



const setCarrito = objeto => {
    console.log(objeto)
    
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1

}

        if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad = carrito[producto.id].cantidad + 1
        }

        carrito[producto.id] = {...producto}
        pintarCarrito()
        //console.log(producto)
}

const pintarCarrito =() =>{
    //console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clon = templateCarrito.cloneNode(true)
        fragment.appendChild(clon)


    })
    items.appendChild(fragment)
    pintarFooter()
    localStorage.setItem('carrito',JSON.stringify(carrito))

}


const pintarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `
        return
    }
    
    
    const ncantidad = Object.values(carrito).reduce((acum,{cantidad}) => acum + cantidad,0)
    const nprecio = Object.values(carrito).reduce((acum,{cantidad, precio}) => acum + cantidad*precio,0)
    
    templateFooter.querySelectorAll('td')[0].textContent = ncantidad
    templateFooter.querySelector('span').textContent = nprecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)
    
    const btnvaciar= document.querySelector('#vaciar-carrito')
    btnvaciar.addEventListener('click', () => {
        
        carrito = {}
        pintarCarrito()
    })
    
    //console.log(nprecio)

}

const btnAccion = e => {
    console.log(e.target)
    //accion de aumentar
    if (e.target.classList.contains('btn-info')){
        console.log(carrito[e.target.dataset.id])

        const producto = carrito[e.target.dataset.id]
        producto.cantidad = carrito[e.target.dataset.id].cantidad + 1
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()

    }
    if (e.target.classList.contains('btn-danger')){
        console.log(carrito[e.target.dataset.id])

        const producto = carrito[e.target.dataset.id]
        producto.cantidad--

        if (producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
        }

    pintarCarrito()
    }

e.stopPropagation()
}









