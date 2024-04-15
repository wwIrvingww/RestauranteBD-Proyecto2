import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
import './Butonns.css'
import Platos from './Platos';
import Horario from './Horario';
import Promedio from './PromedioTiempo';
import Eficiencia from './Eficiencia';


function Butonns() {
    const platos = [
        { plato: "lechuga", total: "4" },
        { plato: "pollo", total: "2" }
      ];      

    const promedioData = [
        { persona: "tres", tiempo: "1:00" },
        { persona: "cuatro", tiempo: "2:00" }
    ];

    const eficienciaData = [
        { persona: "Juanito Pan", eficiencia: "3.5" },
        { persona: "Bob Esponja", eficiencia: "8.9" }
    ];


  return (
    <div className="container">
      <IonButton id="click-trigger">Platos mas pedidos</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent className="ion-padding"> <Platos platosList={platos} /> </IonContent>
      </IonPopover>

      <IonButton id="click-trigger2">Horario con mas demanda</IonButton>
      <IonPopover trigger="click-trigger2" triggerAction="click">
        <IonContent className="ion-padding"> <Horario/> </IonContent>
      </IonPopover>

      <IonButton id="click-trigger3">Promedio de tiempo en comer</IonButton>
      <IonPopover trigger="click-trigger3" triggerAction="click">
        <IonContent className="ion-padding"><Promedio promedioList={promedioData} /></IonContent>
      </IonPopover>

      <IonButton id="click-trigger4">Quejas por persona</IonButton>
      <IonPopover trigger="click-trigger4" triggerAction="click">
        <IonContent className="ion-padding">Hello World!</IonContent>
      </IonPopover>

      <IonButton id="click-trigger5">Quejas por plato</IonButton>
      <IonPopover trigger="click-trigger5" triggerAction="click">
        <IonContent className="ion-padding">Hello World!</IonContent>
      </IonPopover>

      <IonButton id="click-trigger6">Eficiencia de meseros</IonButton>
      <IonPopover trigger="click-trigger6" triggerAction="click">
        <IonContent className="ion-padding"><Eficiencia eficienciaList={eficienciaData} /></IonContent>
      </IonPopover>
    </div>
  );
}

export default Butonns;

