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

        console.log(index % 3)
        setArea(areaList[index % 3])
    }

    return (
        <IonButton onClick={HandleClick}>
            <IonIcon icon={chevronBackOutline}></IonIcon>
        </IonButton>
    )
}

export default ButtonLeft