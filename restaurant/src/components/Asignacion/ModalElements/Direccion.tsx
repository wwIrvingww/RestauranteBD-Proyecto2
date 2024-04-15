import { IonInput } from "@ionic/react"
import '../style.css'

interface ContainerProps {  }

const Direccion: React.FC<ContainerProps> = () => {
    return (
        <IonInput label="Dirección:" className="horizontal"></IonInput>
    )
}

export default Direccion