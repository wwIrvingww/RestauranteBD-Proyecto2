import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { buscarpedidus, total } from '../Controladores/controller';


interface PlatosProps {
  id:string
}

interface palto{
    unitprice: string,
    alimento: string
    
}



const Listapedidos: React.FC<PlatosProps> = ({ id }) => {
  
  const [cuentas, setCuentas] = useState<palto[]>([])

  const [totalidad, settotal] = useState()

  useEffect(() => {
    const fetchData = async () => {
        setCuentas(await buscarpedidus(id))
    }
    
    const fetchtotal = async () => {
      const jayson = await total(id) 
      settotal(jayson[0].total.toFixed(2))
      
      

      
  }
  
    fetchData()
    fetchtotal()
}, [])


  return (
    <IonList>
      {cuentas.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{ 'Nombre:' + item.alimento + ' Precio Unitario ' + item.unitprice}: {1}</IonLabel>
        </IonItem>
      ))}

   <IonItem>Total: {totalidad+''}

   </IonItem>



    </IonList>
  );
};

export default Listapedidos;
