
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

async function makeUnion(table1: number, table2: number) {
    const object = {
        table1: table1,
        table2: table2
    }

    const data = await fetch('http://127.0.0.1:4000/union',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}

async function createCuenta(fecha_cuenta: string, hora_inicio: string, mesa_id: number, cantidadPersonas: number) {
    const object = {
        fecha_cuenta: fecha_cuenta,
        hora_inicio: hora_inicio,
        mesa_id: mesa_id,
        cantidad_persons: cantidadPersonas,
        abierta: "true"
    }
    
    const data = await fetch('http://127.0.0.1:4000/cuenta',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}

async function obtainCuentas() {
    const data = await fetch(`http://127.0.0.1:4000/cuentas`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const cuentas = await data.json()
    return cuentas
}

async function closeCuenta(nombre: string, nit: string, direccion: string, mesa_id: number, hora_fin: string) {
    const object = {
        nombre: nombre,
        nit: nit,
        direccion: direccion,
        abierta: "false",
        mesa_id: mesa_id,
        hora_fin: hora_fin
    }
    
    const data = await fetch('http://127.0.0.1:4000/cuenta/cerrar',
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}

export  {

    getAreas,
    getMesas,
    makeUnion,
    createCuenta,
    obtainCuentas,
    closeCuenta
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

export async function getBebidas() {
  const data = await fetch('http://127.0.0.1:4000/listbebidas',
  {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }

  })

  const listaBebidas =  await data.json()
  return listaBebidas    
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


