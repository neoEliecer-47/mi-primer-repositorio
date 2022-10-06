//<i class="fa-solid fa-rotate-left"></i>
const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tarea')
const template = document.getElementById('template').content 
const fragment = document.createDocumentFragment()

let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    pintartareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

formulario.addEventListener('submit',e =>{
    e.preventDefault()
    //console.log('procesando')
    //console.log(e.target[0].value)
    //console.log(e.target.querySelector('input').value)
    //console.log(input.value)
    setTarea(e)

})


const setTarea = e => {
if(input.value.trim() === ''){//funcion para validar, cuando un campo de texto esta vacio
    alert('Campo vacio')
    input.focus()
    return
    
}
const tarea = {
    id: Date.now(),
        texto: input.value,
        estado: false
}
tareas[tarea.id] = tarea
//console.log(tareas)
//console.log(tarea)

formulario.reset()
input.focus()
pintartareas()

}
//<i class="fa-solid fa-rotate-left"></i>

const pintartareas = e => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
    
    if(Object.values(tareas).length === 0){
        listaTarea.innerHTML =`<div class="alert alert-dark text-center">No hay tareas pendientes 👀</div>
            
        </div>`
        return
    }
    
    listaTarea.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        const clon = template.cloneNode(true)
        clon.querySelector('p').textContent = tarea.texto
        
        if (tarea.estado){
            clon.querySelector('.alert').classList.replace('alert-warning','alert-primary')
            clon.querySelectorAll('.fas')[0].classList.replace('fa-check-circle','fa-rotate-left')
            clon.querySelector('p').style.textDecoration = 'Line-through'
        }
        clon.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clon.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clon)

    })
    listaTarea.appendChild(fragment)
}


const btnAccion = e =>{
    console.log(e.target.classList.contains('fa-check-circle'))
    if (e.target.classList.contains('fa-check-circle')){
        console.log(e.target.dataset.id)
        tareas[e.target.dataset.id].estado = true
        pintartareas()
        console.log(tareas)
    }
    if (e.target.classList.contains('fa-circle-minus')){
        
        delete tareas[e.target.dataset.id]
        pintartareas()
        console.log(tareas)
    }

    if (e.target.classList.contains('fa-rotate-left')){
        
        tareas[e.target.dataset.id].estado = false
        pintartareas()
        //console.log(tareas)
    }
    
    e.stopPropagation


}
//console.log(Date.now())