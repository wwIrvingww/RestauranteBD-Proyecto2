import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { mefeciency } from '../Controladores/controller';

interface PlatosProps {
  fechainicio: string,
  fechafinal: string
}

interface palto{
    nombre: string
    eficiencia: string
    
}


const Eficiencia: React.FC<PlatosProps> = ({ fechainicio, fechafinal  }) => {
  const [cuentas, setCuentas] = useState<palto[]>([])

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await mefeciency(fechainicio, fechafinal))
    }

    fetchData()
}, [])

  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.nombre}: {item.eficiencia}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Eficiencia;
