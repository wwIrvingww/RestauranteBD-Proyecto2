import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { grupquejasalim } from '../Controladores/controller';

interface PlatosProps {
  fechainicio: string,
  fechafinal: string
}

interface palto{
  cantidad_quejas: string
  alimento: string
  string_agg: string
    
}


const Quejas: React.FC<PlatosProps> = ({ fechainicio, fechafinal  }) => {
  const [cuentas, setCuentas] = useState<palto[]>([])

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await grupquejasalim(fechainicio, fechafinal))
    }

    fetchData()
}, [])

  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.cantidad_quejas}: {item.alimento} : {item.string_agg}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Quejas;


