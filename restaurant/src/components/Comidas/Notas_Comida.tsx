import React, { useEffect, useState } from 'react';
import { IonButton } from '@ionic/react';
import './Notas_Comida.css';
import { changeStatrOrder, getComidas } from '../Controladores/controller';

interface Elemento {
  alimento: string;
  orden: string;
  time: string;
}

interface Props {
  elementos: Elemento[];
}

function Notas_Comida({ elementos }: Props) {
  const [comidas, setComidas] = useState<Elemento[]>([]);

  useEffect(() => {
    fetchComidas();
  }, []);

  const fetchComidas = async () => {
    try {
      const comidasData = await getComidas();
      setComidas(comidasData);
    } catch (error) {
      console.error('Error al obtener las comidas:', error);
    }
  };

  const handleClick = async (numberorder: string) => {
    try {
      await changeStatrOrder(numberorder);
      console.log('clickeado')
    } catch (error) {
      console.error('Error al actualizar el estado de la orden:', error);
    }
  };

  return (
    <div className="main">
      <ul className="cards">
        {elementos.map((elemento, index) => (
          <li key={index} className="cards_item">
            <div className="card">
              <div className="card_content">
                <h1 className="card_title">{elemento.alimento}</h1>
                <div className="card_text">
                  <p><strong>Orden:</strong> {elemento.orden}</p>
                  <p><strong>Hora:</strong> {elemento.time}</p>
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
