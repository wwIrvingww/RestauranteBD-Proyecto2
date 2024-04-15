import { IonText } from "@ionic/react"

interface ContainerProps {  }

const Fecha: React.FC<ContainerProps> = () => {

    const date: Date = new Date()
    const year: number = date.getFullYear()
    const month: number = date.getMonth()
    const day: number = date.getDate()

    const format: string = (month < 10) ? '0': ''

    return (
        <IonText>
            <p>Fecha: {day+'/'+format+(month+1)+'/'+year}</p>    
        </IonText>
    )
}

export default Fecha