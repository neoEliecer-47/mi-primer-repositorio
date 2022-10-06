const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()
const Fbotones = document.querySelectorAll('.card .btn ')

const carritoObejto= []

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.licor)

    const producto = {
        titulo: e.target.dataset.licor,
        id: e.target.dataset.licor,
        cantidad: 1
    }

    const indice = carritoObejto.findIndex((licor) => licor.id ===producto.id)
    console.log(indice)

    if(indice === -1){
        carritoObejto.push(producto)
    }else{
        carritoObejto[indice].cantidad++
    }
    console.log(carritoObejto)

    pintarCarrito(carritoObejto)

}





const pintarCarrito = (array) => {
    carrito.textContent = ''
      array.forEach(items => {
          const clon = template.content.firstElementChild.cloneNode(true)
          clon.querySelector('.lead').textContent = items.titulo
          clon.querySelector('.badge').textContent = items.cantidad
  
          fragment.appendChild(clon)
  
      })
  
      carrito.appendChild(fragment)
  }





















Fbotones.forEach(btn => btn.addEventListener('click', agregarAlCarrito))