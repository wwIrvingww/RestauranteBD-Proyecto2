import { IonButton, IonIcon } from "@ionic/react"
import { chevronBackOutline } from "ionicons/icons"

interface ContainerProps { 
    area : string,
    setArea: (area : string) => void
 }

const ButtonLeft : React.FC<ContainerProps> = ({area, setArea}) => {

    const HandleClick = () => {
        setArea('Salón VIP')
    }

    return (
        <IonButton onClick={HandleClick}>
            <IonIcon icon={chevronBackOutline}></IonIcon>
        </IonButton>
    )
}

export default ButtonLeft