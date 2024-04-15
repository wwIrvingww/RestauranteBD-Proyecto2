import React, { useEffect, useState } from 'react';
import { IonButton } from '@ionic/react';
import { pedir } from './getpedidos'
import Pedido from '../../Views/Pedido';


interface Pedido {
    cuentaid: string
    alimento: string
    descripcion: string
    preciounit: string
}

interface ContainerProps { 
   elementos: Pedido[];
   id: string
}

function Listapedidos({ elementos, id }: ContainerProps) {

    const [total, setotal] = useState(0);

    {elementos.map((elemento, index) => (
        setotal(parseFloat(elemento.preciounit) + total)
    ))}
    setotal(total + total*0.10)
    



    return (
      <div>
        <ul>
          {elementos.map((elemento, index) => (
            <li key={index} >
              <div >
                <div >
                  <h1 >{elemento.alimento}</h1>
                  <div >
                    <p><strong>Descripcion:</strong> {elemento.descripcion}</p>
                    <p><strong>Precio Unitario:</strong> {elemento.preciounit}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>Total: {total}</div>
      </div>
    );
  }

export default Listapedidos 