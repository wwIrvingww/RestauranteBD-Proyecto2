import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';

interface PlatosProps {
  platosList: { plato: string; total: string }[];
}

const Platos: React.FC<PlatosProps> = ({ platosList }) => {
  return (
    <IonList>
      {platosList.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.plato}: {item.total}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Platos;
