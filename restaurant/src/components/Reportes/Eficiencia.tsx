import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';

interface EficienciaProps {
  eficienciaList: { persona: string; eficiencia: string }[];
}

const Eficiencia: React.FC<EficienciaProps> = ({ eficienciaList }) => {
  return (
    <IonList>
      {eficienciaList.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.persona}: {item.eficiencia}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Eficiencia;
