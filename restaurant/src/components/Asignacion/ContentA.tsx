import { IonButton, IonCard, IonIcon, IonImg } from "@ionic/react"
import {closeOutline} from 'ionicons/icons'
import './style.css'
import Nombre from "../Cuentas/ModalElements/Nombre"
import NIT from "../Cuentas/ModalElements/NIT"
import Direccion from "../Cuentas/ModalElements/Direccion"
import Fecha from "../Cuentas/ModalElements/Fecha"
import Hora from "../Cuentas/ModalElements/Hora"
import Tables from "../Cuentas/ModalElements/Tables"

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
          
            <Fecha />
            <Hora />
            <Tables myTables={myTables} />
        </IonCard>
    )
}

export default ContentA