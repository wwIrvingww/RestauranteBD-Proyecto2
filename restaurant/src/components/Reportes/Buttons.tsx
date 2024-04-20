import React, { useState } from 'react';
import { InputChangeEventDetail, IonButton, IonContent, IonInput, IonPopover } from '@ionic/react';
import './Butonns.css'
import Platos from './Platos';
import Horario from './Horario';
import Promedio from './PromedioTiempo';
import Eficiencia from './Eficiencia';
import Quejas from './Quejas';
import Quejasper from './Quejaspers';


function Butonns() {
    const [fechainicio, setfechainicio] = useState('')
    const [fechafinal, setfechafinal] = useState('')



    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
      const value = (event.target as HTMLInputElement).value;
      setfechainicio(value);
      console.log(value)
      console.log(fechainicio)
      console.log(fechafinal)
  }
  const handleInputChangeF = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = (event.target as HTMLInputElement).value;
    setfechafinal(value);
    console.log(value)
}




  return (
    <div className="container">
      
      <IonInput
      label='Fecha De Inicio' placeholder='2024-04-06' style={{textAlign:'center', margin:'1%'}}
      onIonChange={handleInputChange}>
      </IonInput>
      <IonInput
      label='Fecha Final' placeholder='2024-06-04' style={{textAlign:'center', margin:'1%'}} onIonChange={handleInputChangeF}>
      </IonInput>
      <IonButton id="click-trigger">Platos mas pedidos</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent className="ion-padding"> <Platos fechainicio={fechainicio} fechafinal={fechafinal} /> </IonContent>
      </IonPopover>

      <IonButton id="click-trigger2">Horario con mas demanda</IonButton>
      <IonPopover trigger="click-trigger2" triggerAction="click">
        <IonContent className="ion-padding"> <Horario fechainicio={fechainicio} fechafinal={fechafinal}/> </IonContent>
      </IonPopover>

      <IonButton id="click-trigger3">Promedio de tiempo en comer</IonButton>
      <IonPopover trigger="click-trigger3" triggerAction="click">
        <IonContent className="ion-padding"><Promedio fechainicio={fechainicio} fechafinal={fechafinal} /></IonContent>
      </IonPopover>

      <IonButton id="click-trigger4">Quejas por persona</IonButton>
      <IonPopover trigger="click-trigger4" triggerAction="click">
        <IonContent className="ion-padding"><Quejasper fechainicio={fechainicio} fechafinal={fechafinal} /></IonContent>
      </IonPopover>

      <IonButton id="click-trigger5">Quejas por plato</IonButton>
      <IonPopover trigger="click-trigger5" triggerAction="click">
        <IonContent className="ion-padding"><Quejas fechainicio={fechainicio} fechafinal={fechafinal} /></IonContent>
      </IonPopover>

      <IonButton id="click-trigger6">Eficiencia de meseros</IonButton>
      <IonPopover trigger="click-trigger6" triggerAction="click">
        <IonContent className="ion-padding"><Eficiencia fechainicio={fechainicio} fechafinal={fechafinal} /></IonContent>
      </IonPopover>
    </div>
  );
}

export default Butonns;

