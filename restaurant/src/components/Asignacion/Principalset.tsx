import { IonCol, IonGrid, IonRow } from "@ionic/react"
import './style.css'
import Mesa4 from "./Mesa4"

interface ContainerProps {  }

const Principalset: React.FC<ContainerProps> = () => {
    return (
        <IonGrid fixed={true}>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4/>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default Principalset