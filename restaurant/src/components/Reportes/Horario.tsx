import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { Horarioconmasdemanda } from '../Controladores/controller';

interface PlatosProps {
  fechainicio: string,
  fechafinal: string
}

interface palto{
    hora_inicial: string
    hora_final: string
    cantidad_pedidos:string
    
}

const Horario: React.FC<PlatosProps> = ({ fechainicio, fechafinal }) => {
  
  const [cuentas, setCuentas] = useState<palto[]>([])

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await Horarioconmasdemanda(fechainicio, fechafinal))
    }

    fetchData()
}, [])

  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{ 'Hora empezar:' + item.hora_inicial + ' Hora a terminar: ' + item.hora_final}: {item.cantidad_pedidos}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Horario;
