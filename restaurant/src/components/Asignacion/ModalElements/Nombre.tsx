import { IonInput } from "@ionic/react"
import '../style.css'

interface ContainerProps {  }

const Nombre: React.FC<ContainerProps> = () => {
    return (
        <IonInput label="Nombre:" className="horizontal"></IonInput>
    )
}

export default Nombre