import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { buscar } from '../Controladores/controller';

interface PlatosProps {
  id: string,
}

interface palto{
    alimento: string
    unitprice: string
    
}


const Alimentos: React.FC<PlatosProps> = ({ id  }) => {
  const [cuentas, setCuentas] = useState<palto[]>([])

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await buscar(id))
    }

    fetchData()
}, [])

  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.alimento}: {item.unitprice}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Alimentos;
