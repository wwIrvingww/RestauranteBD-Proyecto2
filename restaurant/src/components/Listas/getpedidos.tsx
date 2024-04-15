async function pedir( id: string){


    try{
        const response = await fetch(`http://127.0.0.1:4000/pedido/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        } )
        const data = await response.json()
        return data
    
    }catch(err){
        console.error('Error', err)
        return null
    }
 
}

export { pedir}