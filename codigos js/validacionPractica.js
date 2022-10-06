const formulario = document.getElementById('formulario')
const userName = document.getElementById('userName')
const userEmail = document.querySelector('input[name="userEmail"]')
const alertaSuccess = document.getElementById('alertaSuccess')
const alertaNombre = document.getElementById('alertaNombre')
const alertaEmail = document.getElementById('alertaEmail')



const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regUseremail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

const mostrarMensajeExito = () => {
    alertaSuccess.classList.remove('d-none')
    alertaSuccess.textContent = 'mensaje enviado satisfactoriamente'
}

const pintarMensajesErrores = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove('d-none')
        item.tipo.textContent = item.msg
        
    });
}


formulario.addEventListener('submit', e => {
    e.preventDefault()
    alertaSuccess.classList.add('d-none')
    //console.log('formulario procesado')
    //console.log(userName.value)
    //console.log(userEmail.value)

    //console.log(regUserName.test(userName.value))
    console.log(!userName.value.trim()) // esto devuelve true si solo hay espacios vacios

    const errores = []

    if(!regUserName.test(userName.value) || !userName.value.trim() ){
        userName.classList.add('is-invalid')
       errores.push({
        tipo: alertaNombre,
        msg: 'formato no válido en el campo nombre, solo letras'
       })

    }else {
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid')
        alertaNombre.classList.add('d-none')

    }


    if(!regUseremail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add('is-invalid')
        errores.push({
            tipo: alertaEmail,
            msg: 'escriba un correo válido !'
           })

    }else {
        userEmail.classList.remove('is-invalid')
        userEmail.classList.add('is-valid')
        alertaEmail.classList.add('d-none')
    }

    if(errores.length !== 0){
        pintarMensajesErrores(errores)
        return

    }
    
    mostrarMensajeExito()
} )