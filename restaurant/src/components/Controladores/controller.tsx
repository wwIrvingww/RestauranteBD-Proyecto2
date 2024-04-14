
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


export async function getComidas() {
    const comidas = await fetch('http://127.0.0.1:4000/listplat',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    })

    const listacomidas = await comidas.json ()
    return comidas    
}


export async function changeStatrOrder(numberorder: string) {
    try {
      const response = await fetch('/estadorden', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ estado: 'true', numberorder }) // Cambia 'nuevo_estado' por el estado deseado
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
}

