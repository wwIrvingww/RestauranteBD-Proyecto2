import { IonInput } from "@ionic/react"
import '../../Asignacion/style.css'

interface ContainerProps { 
    setNombre: (nombre: string)=> void
 }

const Nombre: React.FC<ContainerProps> = ({setNombre}) => {
    return (
        <IonInput label="Nombre:" className="horizontal"
        onIonChange={(e) => setNombre(e.detail.value!)}></IonInput>
    )
}

export default Nombre