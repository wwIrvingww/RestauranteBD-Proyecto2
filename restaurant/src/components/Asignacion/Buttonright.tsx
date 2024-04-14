import { IonButton, IonIcon } from "@ionic/react"
import { chevronForward } from "ionicons/icons"

interface ContainerProps { 
    areaList : string[],
    index: number,
    setArea: (area : string) => void,
    setIndex: (index: number) => void
 }

const ButtonRight : React.FC<ContainerProps> = ({areaList, index, setArea, setIndex}) => {

    const HandleClick = () => {
        setIndex(index + 1) 

        if (index >= 2) {
            setIndex(0)
        }

        setArea(areaList[index])
    }

    return (
        <IonButton onClick={HandleClick}>
            <IonIcon icon={chevronForward}></IonIcon>
        </IonButton>
    )
}

export default ButtonRight