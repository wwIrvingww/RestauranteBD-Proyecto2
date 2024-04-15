async function getuserpas(nombre: String, contrasenia: string) {
    
    
    const data = await fetch('http://127.0.0.1:4000/searchuser',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const areas = await data.json()

    debugger
    

    for(const i in areas ){
        if((nombre+'' == areas[i].nombre) && (contrasenia == areas[i].contrasena)){
            return true
        }
    }


}

export { getuserpas }