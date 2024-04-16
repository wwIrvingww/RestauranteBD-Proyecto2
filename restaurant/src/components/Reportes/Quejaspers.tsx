import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { grupquejaspers } from '../Controladores/controller';

interface PlatosProps {
  fechainicio: string,
  fechafinal: string
}

interface palto{
  cantidad_quejas: string
  personal: string
  string_agg: string
    
}


const Quejasper: React.FC<PlatosProps> = ({ fechainicio, fechafinal  }) => {
  const [cuentas, setCuentas] = useState<palto[]>([])

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await grupquejaspers(fechainicio, fechafinal))
    }

    fetchData()
}, [])

  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{  item.cantidad_quejas + "-" + item.personal } : {item.string_agg}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Quejasper;


