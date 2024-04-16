import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { platosmaspedidos } from '../Controladores/controller';

interface PlatosProps {
  fechainicio: string,
  fechafinal: string
}

interface palto{
    alimento: string
    cantidad: string
    
}

const Platos: React.FC<PlatosProps> = ({ fechainicio, fechafinal }) => {
  
  const [cuentas, setCuentas] = useState<palto[]>([])

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await platosmaspedidos(fechainicio, fechafinal))
    }

    fetchData()
}, [])

  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.alimento}: {item.cantidad}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Platos;
