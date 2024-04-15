import { IonInput } from "@ionic/react"
import '../style.css'

interface ContainerProps {  }

const NIT: React.FC<ContainerProps> = () => {
    return (
        <IonInput label="NIT:" className="horizontal"></IonInput>
    )
}

export default NIT