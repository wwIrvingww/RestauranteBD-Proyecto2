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

        console.log(index % 3)
        setArea(areaList[index % 3])
    }

    return (
        <IonButton onClick={HandleClick}>
            <IonIcon icon={chevronForward}></IonIcon>
        </IonButton>
    )
}

export default ButtonRight