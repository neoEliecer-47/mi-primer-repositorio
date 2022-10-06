import pintarPollo, { fruta as limon, comidas, Frutas } from "./externo.js";

console.log(limon)



pintarPollo()
comidas()

const frutas = new Frutas('🍏🍐🍑🍒🍓')
console.log(frutas)


/*import GOW from './externo.js'

console.log(GOW)*/


//LOCAL STORAGE


localStorage.setItem('manzana','🍏')

console.log(localStorage.getItem('manzana'))

//eliminar un item
localStorage.removeItem('')


//elminar todos los strings en la memoria
localStorage.clear('key')


if(localStorage.getItem('key')){
    //si eciste aqui va lo qe haremos con los datos
}


const frutas2 = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍒",
        color: "rojo",
    },
    {
        nombre: "🍏",
        color: "verde",
    },
];

localStorage.setItem('frutas2', JSON.stringify(frutas2))

const desdeLocalStorage = JSON.parse(localStorage.getItem('frutas2'))

console.log(desdeLocalStorage)