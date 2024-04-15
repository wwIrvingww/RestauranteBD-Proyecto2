import { IonButton, IonCard, IonIcon } from "@ionic/react"
import { closeOutline } from 'ionicons/icons'
import Nombre from "./ModalElements/Nombre"
import NIT from "./ModalElements/NIT"
import Direccion from "./ModalElements/Direccion"
import { useState } from "react"
import { closeCuenta } from "../Controladores/controller"

interface ContainerProps { 
    setCerrar: (cerrar: boolean) => void,
    mesaId: number
}

const ModalC: React.FC<ContainerProps> = ({setCerrar, mesaId}) => {

    const [nombre, setNombre] = useState('')
    const [nit, setNit] = useState('')
    const [address, setAddress] = useState('')

    const date: Date = new Date()
    const hour: number = date.getHours()
    const minute: number = date.getMinutes()
    const second: number = date.getSeconds()

    const formatH: string = (minute < 10) ? '0': ''
    const formatS: string = (second < 10) ? '0' : ''

    const handleClick = () => {
        setCerrar(false)
    }

    const handleClickCuenta = async () => {
        const hora = hour+':'+formatH+minute+':'+formatS+second
        await closeCuenta(nombre,nit,address,mesaId, hora)
        setCerrar(false)
    }

    return (
        <IonCard className="back">
            <IonButton onClick={handleClick}>
                <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
                <h1>Mesa: {mesaId}</h1>
                <Nombre setNombre={setNombre}/>
                <NIT setNit={setNit}/>
                <Direccion setAddress={setAddress}/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <IonButton color='danger'
                onClick={handleClickCuenta}>Cerrar cuenta</IonButton>
            </div>
        </IonCard>
    )
}

export default ModalC