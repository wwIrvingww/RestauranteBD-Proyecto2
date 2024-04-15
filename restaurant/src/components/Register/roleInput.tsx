import { InputChangeEventDetail, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react'
import './Input.css'

interface ContainerProps { 
  setRole : (role : string) => void,
}

const roleInput: React.FC<ContainerProps> = ({ setRole }) => {
  const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = (event.target as HTMLInputElement).value;
    setRole(value);
  }

  return (
    <IonItem className='inputs' color='primary'>
      <IonSelect 
        aria-label="role" 
        placeholder="Elige tu rol" 
        interface='alert'
        onIonChange={handleInputChange}>
          <IonSelectOption value="mesero" color='tertiary'>mesero</IonSelectOption>
          <IonSelectOption value="cocinero" color='tertiary'>cocinero</IonSelectOption>
          <IonSelectOption value="cajero" color='tertiary'>cajero</IonSelectOption>
      </IonSelect>
    </IonItem>
  )
}

export default roleInput
