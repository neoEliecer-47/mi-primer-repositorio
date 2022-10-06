const formulario = document.querySelector('#formulario')
const pintarTodo = document.querySelector('#pintarToDo')
const templateTodo = document.querySelector('#templateTodo').content
const alerta = document.querySelector('.alert')


let todos = []


const agregarTodo = todo => {
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`   //template string para transformar a string
    }

        todos.push(objetoTodo)

}


const pintarTOdos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
    
    pintarTodo.textContent = ""
    const fragment = document.createDocumentFragment()

    todos.forEach(item => {
        const clon = templateTodo.cloneNode(true)
        //el clon solo buscare dentro del template en el HTML. siendo asi mas especifico para seleccionar un lemento qu incluso se repita en el DOM

        clon.querySelector('.lead').textContent = item.nombre
        clon.querySelector('.btn').dataset.id = item.id  //la propiedad dataset crea una clave unica al elemento seleccionado, pero unicamente permite almacenar String

        fragment.appendChild(clon)

    })
    pintarTodo.appendChild(fragment)
    

}


document.addEventListener('click', e => {
    if(e.target.matches('.btn-danger')){
     todos =  todos.filter(item => item.id !== e.target.dataset.id)
       pintarTOdos()
    }
})




function limpiar (){
    document.querySelector('.form-control').value = '' //limpiar el input
    ocument.querySelector('.form-control').focus() //luego de insertar y limpar colocar el puntero en el input
}


formulario.addEventListener('submit', e => {
    e.preventDefault()
    alerta.classList.add('d-none')

    const data = new FormData(formulario)
    const [todo] = [...data.values()]


    if(!todo.trim()){
        alerta.classList.remove('d-none')
        return
    }

    agregarTodo(todo)
    pintarTOdos()
    limpiar ()
   
    

})


document.addEventListener('DOMContentLoaded', () => {
    
    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'))
        pintarTOdos()
    }
})

