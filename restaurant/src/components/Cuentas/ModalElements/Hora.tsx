import { IonText } from "@ionic/react"

interface ContainerProps {  }

const Hora: React.FC<ContainerProps> = () => {

    const date : Date = new Date()

    const hour: number = date.getHours()
    const minute: number = date.getMinutes()
    const format: string = (minute < 10) ? '0': ''

    return (
        <IonText>
            <p>Hora: {hour+':'+format+minute}</p>
        </IonText>
    )
}

export default Hora