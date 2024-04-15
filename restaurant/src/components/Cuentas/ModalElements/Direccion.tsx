import { IonInput } from "@ionic/react"
import '../../Asignacion/style.css'

interface ContainerProps { 
    setAddress: (address: string)=> void
 }

const Direccion: React.FC<ContainerProps> = ({setAddress}) => {
    return (
        <IonInput label="Dirección:" className="horizontal"
        onIonChange={(e) => setAddress(e.detail.value!)}></IonInput>
    )
}

export default Direccion