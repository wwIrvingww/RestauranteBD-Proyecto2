import { IonRow } from "@ionic/react"


interface ContainerProps { 
    myTables: Array<{
        id: number,
        movable: boolean,
        capacidad: number
    }>,
 }

const ButtonAsig: React.FC<ContainerProps> = ({myTables}) => {
    return (
        <IonRow>jkl</IonRow>
    )
}

export default ButtonAsig