async function getAreas() {
    const data = await fetch('http://127.0.0.1:4000/get_areas',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const areas = await data.json()
    return areas
}

async function getMesas(area: string) {
    const data = await fetch(`http://127.0.0.1:4000/get_mesas_area/${area}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const tables = await data.json()
    return tables
}

export  {
    getAreas,
    getMesas
}