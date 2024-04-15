import { InputChangeEventDetail, IonInput } from '@ionic/react'
import './Input.css'
import { useState } from 'react'

interface ContainerProps { 
    setLastname: (lastname : string) => void,
}

const lastnameInput: React.FC<ContainerProps> = ({ setLastname}) => {
    const [isTouched, setIsTouched] = useState(false)

    const markTouched = () => {
        setIsTouched(true);
    } 

    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
        const value = (event.target as HTMLInputElement).value;
        setLastname(value.trim());
    }

    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
        setFocus(true)
    }

    return (
        <IonInput 
            label='Apellidos' 
            labelPlacement={ focus ? 'stacked' : 'floating' } 
            fill='outline' 
            placeholder='Ingresar apellidos' 
            className={`${'inputs'} ${isTouched && 'ion-touched'}`}
            onIonBlur={() => { markTouched(); }} // Ejecuta markTouched() y validate() cuando se desenfoca
            color='tertiary'
            errorText="Apellidos inválido"
            onIonChange={handleInputChange}
            onFocus={handleFocus}
        ></IonInput>
    )
}

export default lastnameInput