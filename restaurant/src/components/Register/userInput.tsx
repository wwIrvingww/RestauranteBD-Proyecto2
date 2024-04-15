import React, { useState } from 'react';
import { InputChangeEventDetail, IonInput } from '@ionic/react';
import './Input.css'

interface ContainerProps {
  setName : (name : string) => void,
}

const emailInput: React.FC<ContainerProps> = ({ setName }) => {
    const [isTouched, setIsTouched] = useState(false)


    const markTouched = () => {
        setIsTouched(true);
    } 

    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
        const value = (event.target as HTMLInputElement).value
        setName(value.trim())
    }

    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
        setFocus(true)
    }


  return (
    <IonInput
        className={`${'inputs'} ${isTouched && 'ion-touched'}`}
        fill="outline"
        label="Nombre"
        placeholder='Ingrese su nombre'
        labelPlacement={ focus ? 'stacked' : 'floating' }
        errorText="Nombre inválido"
        color='tertiary'
        onIonBlur={() => { markTouched(); }} // Ejecuta markTouched() y validate() cuando se desenfoca
        onIonChange={handleInputChange}
        onFocus={handleFocus}
    ></IonInput>
  )
}

export default emailInput
