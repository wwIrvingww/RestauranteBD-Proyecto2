import { InputChangeEventDetail, IonButton, IonContent, IonInput, IonPopover } from '@ionic/react'
import './button.css'
import { Link } from 'react-router-dom'
import Listapedidos from './Listapedidos'
import { pedir } from './getpedidos'
import { useState } from 'react'

// Usercontroller lo tengo que usar para 
// import { userExists } from '../../controller/UserController'


interface ContainerProps { 
    id : String, 

}

const PedirButton: React.FC<ContainerProps> = ({ 
    id

}) => {

    const [ids, setid] = useState('')
    


    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
      const value = (event.target as HTMLInputElement).value;
      setid(value);
      console.log(value)
   
  }






  return (
    <div className="container">
        <IonInput
            label='Cuenta ID' 
            style={{textAlign:'center', margin:'5%', width:'90%', display:'flex'}}
            fill='outline' 
            placeholder='No.' 
            color='tertiary'
            errorText='No se encuentra este ID'
            onIonChange={handleInputChange}
            >
            </IonInput>
      <IonButton id="click-trigger">Buscar Pedido</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent className="ion-padding"> <Listapedidos id={ids}/> </IonContent>
      </IonPopover>
    </div>
      )
}

export default PedirButton