import { IonCol, IonGrid, IonRow } from "@ionic/react"
import './style.css'
import Mesa4 from "./Mesa4"
import Mesa2 from "./Mesa2"
import Mesa6 from "./Mesa6"

interface ContainerProps {  }

const Terrazaset: React.FC<ContainerProps> = () => {
    return (
        <>
            <IonGrid fixed={true}>
                <IonRow>
                    <IonCol className="centerColumn">
                        <Mesa4 />
                    </IonCol>
                    <IonCol className="centerColumn">
                        <Mesa4 />
                    </IonCol>
                    <IonCol className="centerColumn">
                        <Mesa4 />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="centerColumn">
                        <Mesa2 />
                    </IonCol>
                    <IonCol className="centerColumn">
                        <Mesa6 />
                    </IonCol>
                    <IonCol className="centerColumn">
                        <Mesa2 />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="centerColumn">
                        <Mesa6 />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default Terrazaset