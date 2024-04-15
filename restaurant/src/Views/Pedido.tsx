import { useEffect, useState } from "react"
import Selector from "../components/Asignacion/Selector"
import Tableset from "../components/Asignacion/Tableset"
import {  InputChangeEventDetail, IonInput } from "@ionic/react"
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
            
           
            </div>
        </>
    )

}

export default Pedido