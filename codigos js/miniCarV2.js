const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('templateFooter')
const fragment = document.createDocumentFragment()


let carritoObejto= []

document.addEventListener('click', e => {
   // console.log(e.target.dataset.licor)
    if(e.target.matches('.card .btn-outline-primary')){
        agregarAlCarrito(e)
    }

   // console.log(e.target.matches('.list-group-item .btn-success'))

    if(e.target.matches('.list-group-item .btn-success')){
        btnAumentar(e)
    }

    if(e.target.matches('.list-group-item .btn-danger')){
        btnDisminuir(e)
    }
})



const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.licor)

    const producto = {
        titulo: e.target.dataset.licor,
        id: e.target.dataset.licor,
        cantidad: 1,
        Precio: parseInt(e.target.dataset.precio)  
    }

    //console.log(producto.Precio)

    const indice = carritoObejto.findIndex((licor) => licor.id ===producto.id)
    //console.log(indice)

    if(indice === -1){
        carritoObejto.push(producto)
    }else{
        carritoObejto[indice].cantidad++
        //carritoObejto[indice].Precio = carritoObejto[indice].cantidad * producto.Precio
    }
    console.log(carritoObejto)

    pintarCarrito(carritoObejto)

}





const pintarCarrito = (array) => {
    carrito.textContent = ''
      array.forEach(items => {
          const clon = template.content.cloneNode(true)
          clon.querySelector(".text-white .lead").textContent = items.titulo
          clon.querySelectorAll('p span')[0].textContent = items.titulo
          //clon.querySelectorAll('p span')[1].textContent = items.Precio
          
          clon.querySelector('.badge').textContent = items.cantidad
          clon.querySelectorAll('p span')[1].textContent = items.Precio * items.cantidad

          clon.querySelector('.btn-danger').dataset.btnD = items.id
          clon.querySelector('.btn-success').dataset.btnA = items.id      
          fragment.appendChild(clon)
  
      })
  
      carrito.appendChild(fragment)
      pintarFooter()
  }

  const btnAumentar = e => {
    //console.log('me diste click', e.target.dataset.btnA)
    carritoObejto = carritoObejto.map(item => {
        if(item.id === e.target.dataset.btnA){
            item.cantidad++
        }
        return item
    })
    
    pintarCarrito(carritoObejto)
    //console.log(carritoObejto)
  }



  const btnDisminuir = e => {
    console.log('me diste click', e.target.dataset.btnD)

    carritoObejto = carritoObejto.filter(item => {
        if(item.id === e.target.dataset.btnD){
            if(item.cantidad > 0){
                item.cantidad--
                if(item.cantidad === 0) return
                return item
            }
       
            

        } else {
            return item}
    })
    pintarCarrito(carritoObejto)
}


const pintarFooter = () => {
    footer.textContent = ''

    const total = carritoObejto.reduce( (acc, valorActual) => acc + valorActual.cantidad * valorActual.Precio, 0   )

    const clon = templateFooter.content.cloneNode(true)
    clon.querySelector('span').textContent = total

    //fragment.appendChild(clon)
    footer.appendChild(clon)
    
    if(total === 0){
        footer.innerHTML = ''
    }
}



