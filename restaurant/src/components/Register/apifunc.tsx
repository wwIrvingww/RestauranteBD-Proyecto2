async function postear( nombre: string, apellido: string, contrasenia: string, rol: string ){

    const dats = { nombre: nombre +' '+ apellido , contrasenia: contrasenia, rol: rol  }

    try{
        const response = await fetch('http://127.0.0.1:4000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dats)
        } )
        const data = await response.json()
        return data
    
    }catch(err){
        console.error('Error', err)
        return null
    }
 
}

export { postear}