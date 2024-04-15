import React, { useState } from 'react';
import { InputChangeEventDetail, IonButton, IonIcon, IonInput } from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';
import './Input.css';
import './button.css';

interface ContainerProps { 
    setConfirmation : (confirmation : string) => void,
    password : String 
}

const confirmation: React.FC<ContainerProps> = ({ setConfirmation, password }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showIcon, setShowIcon] = useState(false)

    const [isTouched, setIsTouched] = useState(false)

    const markTouched = () => {
        setIsTouched(true);
    } 

    const handleFocus = () => {
        setShowIcon(true)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
        const value = (event.target as HTMLInputElement).value;
        setConfirmation(value);
      }

    return (
            <IonInput 
                label='Confirmar contraseña' 
                type={showPassword ? 'text' : 'password'}
                labelPlacement={showIcon ? 'stacked' : 'floating'} 
                fill='outline' 
                placeholder='Confirme su contraseña'
                errorText="Las contraseñas no coinciden" 
                className={`${'inputs'} ${isTouched && 'ion-touched'}`}
                color='tertiary'
                onIonBlur={(event) => { markTouched();  }} // Ejecuta markTouched() y validate() cuando se desenfoca
                onFocus={handleFocus}
                onIonChange={handleInputChange}
            >
                {showIcon && (
                    <IonButton
                        fill='clear'
                        slot='end'
                        aria-label='Show/hide'
                        onClick={handleShowPassword}>
                        <IonIcon 
                            slot='icon-only'
                            icon={showPassword ? eye : eyeOff}
                            aria-hidden='true'
                            className='icon'
                        />
                    </IonButton>
                )}
            </IonInput>
    )
}

export default confirmation