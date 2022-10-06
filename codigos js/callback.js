//console.log('funcionando')

const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];



const findPostById = (id, callback )=> {
    const post = posts.find(item => item.id === id)

    if(!post){
        
        callback('no se encontró el post con el id ' +id)
    
    }else  callback(null, post)
   
}

findPostById(2, (err, post) => {
    if(err){
        return //console.log(err)
    }
    
    //console.log(post)

    findPostById(5, (err, post) => {
        if(err){
            return //console.log(err)
        }
        
        //console.log(post)
    })
})


const findPostById_2 = id => new Promise((resolve, reject) => {
    const post = posts.find(item => item.id === id)

    //return new Promise((resolve, reject) 
    setTimeout(() => {

        if(post) resolve(post)
        else reject('no se encontró el id ' +id)
    
    
    }, 2000)
    
    
})

/*findPostById_2(1)
    .then(post => {
        console.log(post) 
        return findPostById_2(2)
    })
       .then(post =>{
        console.log(post)
        return findPostById_2(3)
       }) 
            .then(post => {
                console.log(post)
                return findPostById_2(4)
            })
    .catch(e => console.log(e))*/

    
    const buscar = async () => {
        
        try {
            
            const resPosts = await Promise.all([findPostById_2(1), findPostById_2(2)]) // el problema es que con .ALL si falla una promesa fallaran las restantes porque entra directamente al catch 
            /*const postUno = await findPostById_2(1)
            const postDos = await findPostById_2(2)
            console.log(postUno.title, postDos.title)*/
            console.log(resPosts)
        } catch (error) {
            console.log(error)
        } finally {console.log('se ejecuta sí o sí')} 
    }
    buscar(5)
    console.log('funcionando')


    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const url2 = 'https://jsonplaceholder.typicode.com/posts/'

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        .finally(() => console.log('ha finalizado'))


    const findPostById_3 = async(id) => {
        try {
            
            const res = await fetch(url2 +id)
            const post = await res.json()

            console.log(post)


        } catch (error) {
            console.log(error)
        }
    }

    findPostById_3(47)


    /*const name = 'jhon'
    window.name = 'eliecer'

    const getName = () => {
        const name = 'pedro'
        return this.name
    }

    console.log(getName())*/