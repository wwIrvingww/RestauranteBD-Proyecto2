import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';

interface PromedioProps {
  promedioList: { persona: string; tiempo: string }[];
}

const Promedio: React.FC<PromedioProps> = ({ promedioList }) => {
  return (
    <IonList>
      {promedioList.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.persona}: {item.tiempo}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Promedio;
