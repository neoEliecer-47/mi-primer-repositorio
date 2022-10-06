const gato = {
    nombre: 'ton ton',
    edad: 2,
    duerme: true,
    enemigos: ["agua","gato blanco","perros"],
    //comidas_favoritas: ['pelotas','pescado','huevo']
    
    set nuevoEnemigo(nuevo){
        this.enemigos.push(nuevo)
    },
    comer(alimento){
        console.log(`
        ${this.nombre} esta comiendo ${alimento}
        `)

    },
    listarEnemigos(){
        this.enemigos.forEach(items => console.log(items))
    }
}
gato.nuevoEnemigo = "mala gente"

const comiendo = gato.comer('asadura')
console.log(comiendo)


console.log(gato.comer("pelotas"))
console.log(gato.listarEnemigos())
gato.listarEnemigos()

for(let propiedad in gato){
    console.log(gato[propiedad])

}

//console.log(Object.values(gato))
Object.values(gato).forEach(propiedades => console.log(propiedades))

const {nombre, edad, duerme} = gato
const {comidas_favoritas: comidas = "no tiene"} = gato

console.log(nombre,edad,duerme,comidas)

const persona = {
    nombre: 'Eliecer',
    edad: 27,
    profesion: 'programmer',
    
    get mayus(){
        return this.nombre.toUpperCase()
    },
    
    
    gustos:{
        musicales:{
            rock:{
                alternativo: {
                    coldplay: ['parachutes','X&Y','EveryDay Life']

                },
                grunge:{
                    nombre: 'nirvana',
                    albumesFavoritos: ['nevermind','In utero','MTV Unplugged']
                },
                moderno: 'the strokes'
            },
        },

    },
    
    
}


console.log(persona.mayus)

/*console.log(+Object.values(persona).forEach(propiedades => {
    //console.log(propiedades)
    console.log(propiedades)
}))*/

const {gustos: {musicales: {rock: {grunge: {albumesFavoritos : Nirvana_Albums}}}}} = persona

const [Lounge_Act, Dumb, Where_did_you_sleep_last_nigth] = Nirvana_Albums
console.log(Where_did_you_sleep_last_nigth, Dumb)

const {coldplay: FIxYou} = persona.gustos.musicales.rock.alternativo

const [We_never_change, Square_One, ChampionOF_theWorld, Oceans = "este album no se ha registrado"] = FIxYou
console.log(Oceans)

console.log(gato)