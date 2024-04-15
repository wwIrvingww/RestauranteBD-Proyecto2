import React, { useState } from 'react'
import { InputChangeEventDetail, IonInput } from '@ionic/react'
import './Input.css'


/**
 * Código obtenido de github
 * Repositorio: validador-dpi-nit
 * Autor: alextello
 */
//--------------------------------------------------------------------------------
/**
 * @param {string} nombre - número de DPI
 * @returns {boolean} true para CUI válido y false para CUI no válido
 * */
//-------------------------------------------------------------------------

interface ContainerProps { 
    setnombre : (nombre : string) => void,
}

const nombre: React.FC<ContainerProps> = ({setnombre}) => {

    const [isTouched, setIsTouched] = useState(false)

    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
        const value = (event.target as HTMLInputElement).value;
        setnombre(value);
    }

    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
        setFocus(true)
    }

    return (
        <IonInput 
            label='Nombre' 
            labelPlacement={ focus ? 'stacked' : 'floating' }
            fill='outline' 
            placeholder='Juan Mateo' 
            className={`${'inputs'} ${isTouched && 'ion-touched'}`}
            color='tertiary'
            errorText='DPI inválido'
            onIonChange={handleInputChange}
            onFocus={handleFocus}    
        ></IonInput>
    )
}

export default nombre 