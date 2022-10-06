const formulario = document.querySelector('#formulario')
const cardsEstudiantes = document.querySelector('#cardsEstudiantes')
const cardsProfesores = document.querySelector('#cardsProfesores')
const templateEstudiantes = document.querySelector('#templateEstudiantes').content
const templateProfesores = document.querySelector('#templateProfesores').content
const userEmail = document.getElementById('userEmail')
const alert = document.querySelector('.alert')
const alertEmail = document.querySelector('.alert-warning')

const estudiantes = []
const profesores = []


document.addEventListener('click', e => {

    /*const verificarUsuario = stop => {
        if(e.target.matches('.btn-lg')){
            estudiantes.forEach(item => {
                if(item.correo === userEmail.value){
                alert('existe')
                return stop
             
                }
            })
        }
    }*/
 
    
    
    console.log(e.target.dataset)
    if(e.target.dataset.email){
        if(e.target.matches('.btn-success')){
            estudiantes.map(item => {
                if(item.correo === e.target.dataset.email){
                    item.setEstado = true
                }
                return item
            })
        }
    }

    if(e.target.dataset.email){
        if(e.target.matches('.btn-danger')){
            estudiantes.map(item => {
                if(item.correo === e.target.dataset.email){
                    item.setEstado = false
                
                }
                return item
            })
        }

    }

    Persona.pintarPersonaUI(estudiantes, 'Estudiante')
})

class Persona{
    constructor(nombre, edad, correo){
        this.nombre = nombre
        this.edad = edad
        this.correo = correo
    }

static pintarPersonaUI(personas, tipo){
 
    const fragmemt = document.createDocumentFragment()
    
    if(tipo === 'Estudiante'){
        
        cardsEstudiantes.textContent = ""
       
        
        personas.forEach(element => {
            fragmemt.appendChild(element.agregarNuevoEstudiante())
        })
        cardsEstudiantes.appendChild(fragmemt)
    }   


    if(tipo === 'Profesor'){
        
        cardsProfesores.textContent = ""
       
        
        personas.forEach(element => {
            fragmemt.appendChild(element.agregarNuevoProfesor())
        });
        cardsProfesores.appendChild(fragmemt)
    }   
}

}

class Estudiante extends Persona{
    
    #Estado = false
    #Estudiante = 'Estudiante'

    set setEstado(estado){
    this.#Estado = estado
    }

    get getEstudiante(){
    return this.#Estudiante
    }

    agregarNuevoEstudiante(){
        
        /*formulario.addEventListener('click', e => {
            if(e.target.matches('.btn-primary')){
                estudiantes.map(item => {
                    if(item.correo === userEmail.value){
                        console.log('usuario existente')
                        
                        //return 
                    }
                })
               
            }*/
            
                
        const clon = templateEstudiantes.cloneNode(true)

        clon.querySelector('h5 .text-primary').textContent = this.nombre
        clon.querySelector('h6').textContent = this.getEstudiante
        clon.querySelector('.lead').textContent = this.edad
        clon.querySelector('.text-dark').textContent = this.correo

        if(this.#Estado){
            clon.querySelector('.badge').className = 'badge bg-success'
            clon.querySelector('.btn-success').disabled = true
            clon.querySelector('.btn-danger').disabled = false
            
        }else {
            clon.querySelector('.badge').className = 'badge bg-danger'
            clon.querySelector('.btn-danger').disabled = true
            clon.querySelector('.btn-success').disabled = false
        }
        clon.querySelector('.badge').textContent = this.#Estado ? 'Aprobado' : 'Reprobado'


        clon.querySelector('.btn-success').dataset.email = this.correo
        clon.querySelector('.btn-danger').dataset.email = this.correo
        //clon.querySelector('.btn-primary').dataset.email = userEmail.value


        return clon
            
            }
       

       verificarPersona(){

            formulario.addEventListener('click', e => {

                if(e.target.matches('.btn-lg')){
                    estudiantes.forEach(item => {
                        if(item.correo === userEmail.value){
                        alert('existe')
                        return
                     
                        }
                    })
                }
            })

       }     
        
        
        
    }





class Profesor extends Persona{
    #profesor ='Profesor'

    agregarNuevoProfesor(){
        const clon = templateProfesores.cloneNode(true)
        clon.querySelector('h5').textContent = this.nombre
        clon.querySelectorAll('.bg-dark h6')[0].textContent = this.#profesor
        clon.querySelector('.lead').textContent = this.edad
        clon.querySelectorAll('.bg-dark h6')[1].textContent = this.correo

        return clon
    }

}


formulario.addEventListener('submit', e => {
    e.preventDefault()
    alert.classList.add('d-none')
    userEmail.classList.remove('is-invalid')
    //Persona.verificarPersona()
    
           const datos = new FormData(formulario)
                
           //datos.forEach(item => console.log(item))
           //console.log([...datos.values()])
           
           const [nombre, edad, correo, opcion] = [...datos.values()]
           console.log(nombre, edad,correo, opcion)
           
           
           if(!nombre.trim() || !edad.trim() || !correo.trim()){
            console.log('algun dato vacio')
            alert.classList.remove('d-none')
            return
           }else{
            alert.classList.add('d-none')
           }

           
           if(opcion === 'Estudiante'){
               
               if(estudiantes.some(item => item.correo === userEmail.value) ){
                console.log('correo ya existente')
                userEmail.classList.add('is-invalid')
                alertEmail.classList.remove('d-none')
                userEmail.focus()
                return
              }
           }

           if(opcion === 'Profesor'){
            if(profesores.some(item => item.correo === userEmail.value) ){
                console.log('correo ya existente')
                userEmail.classList.add('is-invalid')
                alertEmail.classList.remove('d-none')
                userEmail.focus()
                return
              }


           }

          
           
           
           if(opcion === 'Estudiante'){
               
               const estudiante = new Estudiante(nombre, edad, correo)
               estudiantes.push(estudiante)
               Persona.pintarPersonaUI(estudiantes, opcion)
           }
           
           if(opcion === 'Profesor'){
               
               const profesor = new Profesor(nombre, edad, correo)
               profesores.push(profesor)
               Persona.pintarPersonaUI(profesores, opcion)
       
           }

           /*const verificarUsuario =  estudiantes.map(item => {
            return item
          })*/
          
          
          
          
    
    
    
    })

    

