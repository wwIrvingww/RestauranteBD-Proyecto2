import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { eattimes } from '../Controladores/controller';

interface PlatosProps {
  fechainicio: string,
  fechafinal: string
}

interface palto{
  cantidad_persons: string
    hours: string
    minutes: string
    tiempo: any


    
}

const Promedio: React.FC<PlatosProps> = ({ fechainicio, fechafinal   }) => {
  const [cuentas, setCuentas] = useState<palto[]>([])

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await eattimes(fechainicio, fechafinal))
    }

    fetchData()
}, [])
  
  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.cantidad_persons}: { 'Horas: ' + item.tiempo.hours*-1 + ' Minutos: ' + item.tiempo.minutes*-1}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Promedio;
