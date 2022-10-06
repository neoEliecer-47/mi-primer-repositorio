/*const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.forms[0].name))*/

    const cards = document.getElementById('cards-dinamicas')
    const templateCard = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment()
    const paginacion = document.getElementById('paginacion')

    document.addEventListener('DOMContentLoaded', () => {
        fetchAPI()
    })

    const url = 'https://rickandmortyapi.com/api/character'

    const fetchAPI = async (url = 'https://rickandmortyapi.com/api/character', e) => {
        //console.log('obteniendo datos...')
        try {
        loadingData(true)    
        //pintarPagButtons()
        

        const res = await fetch(url)
        const datas = await res.json()
        pintarCard(datas)
        
        pintarPagButtons(datas)
        
        
        /*paginacion.addEventListener('click', async e => {
            if(e.target.matches('.btn-outline-primary')){
                
                
            }

            if(e.target.matches('.btn-outline-secondary')){
                
                
            }
        })*/
        
        
        /*for(let i of data){
            if(pintarPagButtons(e.target.matches('.btn-outline-primary'))){
                const res = await fetch(i.next)
                const data = await res.json()
                pintarCard(data)
            }

            if(i.prev){
                const res = await fetch(i.prev)
                const data = await res.json()
                pintarCard(data) 
            }
        }*/
        
        console.log(datas.results[0].name)
        
        //pintarCard(data)
        
        //pintarPaginacion(data)
        
        } catch (error) {
            console.log(error)
        }finally {
            loadingData(false)
        }
    } 


    
    const pintarCard = (datas) => {
        //console.log(data)
        pintarPagButtons(datas)
        cards.innerHTML =""
        //pintarCard.innerHTML = ""
        datas.results.forEach(item => {
            //console.log(item)
            const clon = templateCard.cloneNode(true)
            clon.querySelector('h5').textContent = item.name
            clon.querySelector('p').textContent = item.species
            clon.querySelector('.card-img-top').setAttribute('src', item.image)
            
            //guardamos en el fragment para evitar el reflow
            fragment.appendChild(clon)
            


        });
    cards.appendChild(fragment)
    
    pintarPaginacion(datas.info)
    //pintarPagButtons(datas)

     
    
    }



    const pintarPaginacion = datas => {
    //console.log(data)
        
        const templatePaginacion = document.getElementById('template-paginacion').content
        paginacion.innerHTML =""
        const clon = templatePaginacion.cloneNode(true)
        
        if(datas.prev)  clon.querySelector('.btn-outline-secondary').disabled = false
        else  clon.querySelector('.btn-outline-secondary').disabled = true


        if(datas.next)   clon.querySelector('.btn-outline-primary').disabled = false
        else   clon.querySelector('.btn-outline-primary').disabled = true
        
        
        
        paginacion.appendChild(clon)
        

       }




       const pintarPagButtons = (datas) => {
    paginacion.addEventListener('click', async (e)  => {
        
        if(e.target.matches('.btn-outline-primary')){
            if(datas.info.next){
                    
                const result = await fetch(datas.info.next)
                const data2 = await result.json()
                pintarCard(data2)
                return
                
            }
        
        }  

        if(e.target.matches('.btn-outline-secondary')){
            if(datas.info.prev){

                const result = await fetch(datas.info.prev)
                    const data2 = await result.json()
                    pintarCard(data2)
                    return
                    
            }
        }
        //pintarPaginacion(datas)  
        
    
    })

}



    const loadingData = (estado) => {
        const loading = document.getElementById('loading')

        if(estado)   loading.classList.remove('d-none')
        else   loading.classList.add('d-none')
        
       


    }
/*cards.addEventListener('click', (e, data) => {
    console.log(e.target.matches('.justify-content-between')+ data.info)
} )*/
