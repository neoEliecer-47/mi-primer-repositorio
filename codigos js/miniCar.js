const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()
const Fbotones = document.querySelectorAll('.card .btn ')


const carrtioObejto = {}

const agregarAlCarrito = (e) => {
console.log(e.target.dataset.fruta)

const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1
}


if(carrtioObejto.hasOwnProperty(producto.titulo)){        
    producto.cantidad = carrtioObejto[producto.titulo].cantidad + 1
    
}

carrtioObejto[producto.titulo] = producto

    

pintarCarrito(producto)

console.log(carrtioObejto)
}

const pintarCarrito = (producto) => {
  carrito.textContent = ''
    Object.values(carrtioObejto).forEach(items => {
        const clon = template.content.firstElementChild.cloneNode(true)
        clon.querySelector('.lead').textContent = items.titulo
        clon.querySelector('.badge').textContent = items.cantidad

        fragment.appendChild(clon)

    })

    carrito.appendChild(fragment)
}

Fbotones.forEach(btn => btn.addEventListener('click', agregarAlCarrito))