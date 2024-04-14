// En Notas_Comida.tsx
import React from 'react';
import { IonButton } from '@ionic/react';
import './Notas_Comida.css';
import { changeStatrOrder } from '../Controladores/controller'// Importa la función desde el controlador

interface Elemento {
  titulo: string;
  orden: string;
  hora: string;
}

interface Props {
  elementos: Elemento[];
}

function Notas_Comida({ elementos }: Props) {
  const handleClick = async (numberorder: string) => {
    try {
      await changeStatrOrder(numberorder); // Llama a la función changeStatrOrder con el número de orden
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="main">
      <ul className="cards">
        {elementos.map((elemento, index) => (
          <li key={index} className="cards_item">
            <div className="card">
              <div className="card_content">
                <h1 className="card_title">{elemento.titulo}</h1>
                <div className="card_text">
                  <p><strong>Orden:</strong> {elemento.orden}</p>
                  <p><strong>Hora:</strong> {elemento.hora}</p>
                </div>
              </div>
              <IonButton expand="block" onClick={() => handleClick(elemento.orden)}>Listo</IonButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notas_Comida;
