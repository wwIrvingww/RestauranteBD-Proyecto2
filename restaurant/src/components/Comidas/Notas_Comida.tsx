import React from 'react';
import { IonButton } from '@ionic/react';
import './Notas_Comida.css';

interface Elemento {
  titulo: string;
  orden: string;
  hora: string;
}

interface Props {
  elementos: Elemento[];
  onClickButton: () => void; // Tipo de la función onClickButton
}

function Notas_Comida({ elementos, onClickButton }: Props) {
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
              <IonButton expand="block" onClick={onClickButton}>Listo</IonButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notas_Comida;
