
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
    const data = await fetch('http://127.0.0.1:4000/listplat',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    })

    const listacomidas =  await data.json()
    console.log(listacomidas)
    return listacomidas    
}


export async function changeStatrOrder(numberorder: string) {
  try {
      const response = await fetch('http://127.0.0.1:4000/estadorden', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              estado: 'true',
              numberorder: numberorder
          })
      });

      if (!response.ok) {
          throw new Error('Error al actualizar el estado de la orden');
      }

      const data = await response.json();
      return data;
  } catch (error) {
      throw error;
  }
}


