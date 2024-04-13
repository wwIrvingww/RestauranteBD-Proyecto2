import { IonButton, IonIcon } from "@ionic/react"
import { chevronForward } from "ionicons/icons"

interface ContainerProps { 
    areaList : string[],
    index: number,
    setArea: (area : string) => void
 }

const ButtonRight : React.FC<ContainerProps> = ({areaList, index, setArea}) => {

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