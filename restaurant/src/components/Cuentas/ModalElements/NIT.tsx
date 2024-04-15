import { IonInput } from "@ionic/react"
import '../../Asignacion/style.css'

interface ContainerProps { 
    setNit: (nit: string)=> void
 }

const NIT: React.FC<ContainerProps> = ({setNit}) => {
    return (
        <IonInput label="NIT:" className="horizontal"
        onIonChange={(e) => setNit(e.detail.value!)}></IonInput>
    )
}

export default NIT