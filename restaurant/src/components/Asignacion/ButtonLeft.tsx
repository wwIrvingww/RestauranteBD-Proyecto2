import { IonButton, IonIcon } from "@ionic/react"
import { chevronBackOutline } from "ionicons/icons"

interface ContainerProps { 
    areaList : string[],
    index: number,
    setArea: (area : string) => void,
    setIndex: (index: number) => void
 }

const ButtonLeft : React.FC<ContainerProps> = ({areaList, index, setArea, setIndex}) => {

    const HandleClick = () => {
        setIndex(index - 1) 

        if (index <= 0) {
            setIndex(2)
        }

        setArea(areaList[index])
    }

    return (
        <IonButton onClick={HandleClick}>
            <IonIcon icon={chevronBackOutline}></IonIcon>
        </IonButton>
    )
}

export default ButtonLeft