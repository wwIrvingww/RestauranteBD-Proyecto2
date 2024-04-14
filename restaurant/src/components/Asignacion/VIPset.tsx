import { IonCol, IonGrid, IonRow } from "@ionic/react"
import Mesa2 from "./Mesa2"
import Mesa4 from "./Mesa4"

interface ContainerProps {  }

const VIPset: React.FC<ContainerProps> = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa2 />
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 />
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa2 />
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 />
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa4 />
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4 />
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default VIPset