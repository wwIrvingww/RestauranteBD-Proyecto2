import { IonCardHeader, IonCardTitle } from "@ionic/react"

interface ContainerProps { name: string }

const AreaName : React.FC<ContainerProps> = ({name}) => {
    return (
        <IonCardHeader>
            <IonCardTitle>{name}</IonCardTitle>
        </IonCardHeader>
    )
}

export default AreaName