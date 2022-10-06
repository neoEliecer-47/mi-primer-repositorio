const bebidas = ["🍷", "🥃", "🍻"];

const nuevoArray = bebidas.map(bebida =>  bebida)

console.log(nuevoArray)

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },

];

const mayores_30 = users.filter(user => user.age < 30)

const mayor = users.filter((user) => user.age > 30);
console.log(mayores_30)

const userFiltrado = users.filter(user => user.uid !== 3)
console.log(userFiltrado)

const {age: edad} = users.find(user => user.uid === 2) //la debilidad de find es que sino existe un elemeto con los parametros buscados, no dara un ERROR
console.log(edad)

const existe = users.some(user => user.uid ===4)
console.log(existe)

const indice = users.findIndex(user => user.uid === 2)
console.log(users[indice])
console.log(indice)

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = array1.concat(array2)
console.log(array3)
const array4 = [...array1, ...array2]
console.log(array4)

const numeros = [1, 2, 3, 4, 5, 5];
const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual)
console.log(sumarTodos)

const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const arrayPlano = arrayNumeros.reduce((acc, current) => acc.concat(current))

console.log(arrayPlano)

const arrayPlano2 = [].concat(...arrayNumeros)
console.log(arrayPlano2)

const arrayPlano3 = arrayNumeros.flat() //a mi parecer es mas sencillo para lograrlo
console.log(arrayPlano3)


const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arreglo = cadenaMeses.split(',')
console.log(arreglo)
