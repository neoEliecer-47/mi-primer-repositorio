function persona(nombre) {
    this.nombre = nombre

    this.saludar = function() {
        return `${this.nombre} dice hola`
    }
}

persona.prototype.saludarIngles = function(){
    return  `${this.nombre} says hi`
}

const pedro = new persona('pedro')

console.log(pedro)

class Persona2 {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    
        
    }

    get getName(){
        return this.nombre.toUpperCase()
    }

    set setName(nombre){
        this.nombre = nombre
    }
    
    
    saludar2(){
        return `${this.nombre} esta diciendo hola` 
    }

    static probarSaludo(nombre){
        return `${nombre} saluda` 
    }

    
}

class Estudiante extends Persona2{
    
    constructor(nombre, edad, nota = []){
        super(nombre, edad)
        this.nota = nota
    }
    
    saludar2(){
        return `${this.nombre} esta diciendo hola desde estudiante` 
    }

    set setNota(nota){
        this.nota.push(nota)
    }

    get getNota(){
        return this.nota
    }
}

const pablo = new Estudiante('pablo', 25)
console.log(pablo.saludar2())
console.log(pablo)

pablo.setNota = 5
pablo.setNota = 8
pablo.setNota = 10


console.log(pablo.getNota)
console.log(Persona2.probarSaludo('juan'))



const Eliecer = new Persona2('Eliecer')
console.log(Eliecer)

const Moises = new Persona2('Moises')
//console.log(Moises.saludar2())

Moises.setName = 'Santiago'
console.log(Moises.saludar2())
console.log(Eliecer.getName )

