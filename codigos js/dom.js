const color = document.getElementById('inputColor')
const boton = document.querySelector('.btn-primary')
const container = document.querySelector('.card')
const parrafo = document.querySelector('.lead')

console.log(color.value)

boton.addEventListener('click', () =>{
    
parrafo.textContent = color.value
container.style.backgroundColor = color.value

})
