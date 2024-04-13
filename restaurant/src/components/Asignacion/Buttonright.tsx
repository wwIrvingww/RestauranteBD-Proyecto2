import { IonButton, IonIcon } from "@ionic/react"
import { chevronForward } from "ionicons/icons"

interface ContainerProps { 
    area : string,
    setArea: (area : string) => void
 }

const ButtonRight : React.FC<ContainerProps> = ({area, setArea}) => {

    const HandleClick = () => {
        setArea('Salón Principal')
    }

    return (
        <IonButton onClick={HandleClick}>
            <IonIcon icon={chevronForward}></IonIcon>
        </IonButton>
    )
}

export default ButtonRight