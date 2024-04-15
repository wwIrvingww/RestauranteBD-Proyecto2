import { IonButton, IonCard, IonIcon, IonImg } from "@ionic/react"
import {closeOutline} from 'ionicons/icons'
import './style.css'
import Nombre from "./ModalElements/Nombre"
import NIT from "./ModalElements/NIT"
import Direccion from "./ModalElements/Direccion"
import Fecha from "./ModalElements/Fecha"
import Hora from "./ModalElements/Hora"
import Tables from "./ModalElements/Tables"

interface ContainerProps { 
    onClose: () => void,
    myTables: Array<{
        id: number,
        movable: boolean,
        capacidad: number
    }>,
 }

const ContentA: React.FC<ContainerProps> = ({onClose, myTables}) => {
    return (
        <IonCard className="back">
            <IonButton onClick={onClose}>
                <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
            <Nombre />
            <NIT />
            <Direccion />
            <Fecha />
            <Hora />
            <Tables myTables={myTables} />
        </IonCard>
    )
}

export default ContentA