const contenedor = document.querySelector(".container")

/*contenedor.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("click");
    });
});*/

document.addEventListener('click', click => {
    if(click.target.id === 'nieto'){
        console.log('click en nieto')
    }

    if(click.target.matches('.border-secondary')){ //muestra un booleano si el contenedor seleccionado existe o no
        console.log(click.target.matches('.border-secondary'))
    }

    //console.log(click.target.dataset.div)
    if(click.target.dataset.div === 'divPadre'){
            console.log('diste padre DIV')

    }
})

