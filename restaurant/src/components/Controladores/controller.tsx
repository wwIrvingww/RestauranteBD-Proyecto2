
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
        cantidad_persons: cantidadPersonas
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

export  {

    getAreas,
    getMesas,
    makeUnion,
    createCuenta
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



export async function platosmaspedidos(fechainicio: string, fechafinal: string) {
    try {
        const response = await fetch('http://127.0.0.1:4000/report_1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fechainicio: fechafinal,
                fechafinal: fechainicio
            })
        });
  
        if (!response.ok) {
            throw new Error('Oops no data');
        }
  
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
  

export async function Horarioconmasdemanda(fechainicio: string, fechafinal: string) {
    try {
        const url = `http://127.0.0.1:4000/cpedidos?fechainicio=${fechainicio}&fechafinal=${fechafinal}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Oops no data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

  
  export async function mefeciency(fechainicio: string, fechafinal: string) {
    try {
        const response = await fetch('http://127.0.0.1:4000/meficiency', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fechainicio: fechafinal,
                fechafinal: fechainicio
            })
        });
  
        if (!response.ok) {
            throw new Error('Oops no data');
        }
  
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
  }
  

  export async function grupquejasalim(fechainicio: string, fechafinal: string) {
    try {
        const response = await fetch('http://127.0.0.1:4000/gqueja', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fechainicio: fechafinal,
                fechafinal: fechainicio
            })
        });
  
        if (!response.ok) {
            throw new Error('Oops no data');
        }
  
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
  }
  


  export async function grupquejaspers(fechainicio: string, fechafinal: string) {
    try {
        const response = await fetch('http://127.0.0.1:4000/report_4', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fechainicio: fechafinal,
                fechafinal: fechainicio
            })
        });
  
        if (!response.ok) {
            throw new Error('Oops no data');
        }
  
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
  }

  export async function eattimes(fechainicio: string, fechafinal: string) {
    try {
        const response = await fetch('http://127.0.0.1:4000/eattime', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fechainicio: fechafinal,
                fechafinal: fechainicio
            })
        });
  
        if (!response.ok) {
            throw new Error('Oops no data');
        }
  
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
  }
  