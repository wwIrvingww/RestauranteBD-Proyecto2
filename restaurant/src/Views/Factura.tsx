import { useEffect, useState } from "react"
import Selector from "../components/Asignacion/Selector"
import Tableset from "../components/Asignacion/Tableset"
import {  InputChangeEventDetail, IonInput, IonItem, IonSelect, IonSelectOption } from "@ionic/react"
import '../components/Asignacion/style.css'
import PedirButton from '../components/Listas/pedidosbutton'
import Listapedidos from "../components/Listas/Listapedidos"

interface ContainerProps {  }

interface pedido {
    id: string,
    alimento: boolean,
    descripcion: number
    preciounit: number
}

const Pedido: React.FC<ContainerProps> = () => {

    const [lista, setlistas] = useState([]);
    const [id, setid] = useState('')


    const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
        const value = (event.target as HTMLInputElement).value;
        setid(value);
    }

    return (
        <>
            <div>
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
            <div><PedirButton id={id}/></div> 
            <div style={{display: 'flex', flexDirection:'row'}}>
            <IonInput
            label='Nombre' 
            style={{textAlign:'center', width:'20vw', height:'5vh', marginLeft:'5px' ,display:'flex'}}
            fill='outline' 
            placeholder='Nombre' 
            color='tertiary'
            errorText='No se encuentra este ID'
            onIonChange={handleInputChange}
            >
            </IonInput>
            <IonInput
            label='NIT' 
            style={{textAlign:'center', height:'5vh' , width:'15vw', display:'flex'}}
            fill='outline' 
            placeholder='NIT' 
            color='tertiary'
            errorText='No se encuentra este ID'
            onIonChange={handleInputChange}
            >
            </IonInput>
            
            </div>
            <IonInput
            label='Ciudad' 
            style={{textAlign:'center', margin:'2%' ,height:'5vh' , width:'30vw', display:'flex'}}
            fill='outline' 
            placeholder='Ciudad' 
            color='tertiary'
            errorText='No se encuentra este ID'
            onIonChange={handleInputChange}
            >
            </IonInput>

            <div style={{marginTop:'5%'}}>
                <p style={{ justifyContent:'center', textAlign:'center'}}>Alimentos</p>
            </div>

            <div style={{marginTop:'5%'}}>
                <p style={{ justifyContent:'center', textAlign:'center'}}>Total a Pagar</p>
            </div>

            <IonInput
            label='Monto:' 
            style={{textAlign:'center', margin:'2%' ,height:'5vh' , width:'20vw', display:'flex'}}
            fill='outline' 
            placeholder='Q.0.00' 
            color='tertiary'
            errorText='No se encuentra este ID'
            onIonChange={handleInputChange}
            >
            </IonInput>


            <IonItem className='inputs' color='terciary'>
            <IonSelect 
                aria-label="role" 
                placeholder="Metodo de Pago" 
                interface='alert'
                onIonChange={handleInputChange}>
                <IonSelectOption value="Credito/Debito" color='tertiary'>Credito/Debito</IonSelectOption>
                <IonSelectOption value="Efectivo" color='tertiary'>Efectivo</IonSelectOption>
                <IonSelectOption value="Otro" color='tertiary'>Otro</IonSelectOption>
            </IonSelect>
            </IonItem>
            </div>
            
        </>
    )

}

export default Pedido