import { IonCol, IonGrid, IonRow } from "@ionic/react"
import Mesa2 from "./Mesa2"
import Mesa4 from "./Mesa4"
import { useEffect, useState } from "react";
import { getMesas } from "../Controladores/controller";

interface ContainerProps { 
    showButton: number;
    setShowButton: (showButton: number) => void
}

const VIPset: React.FC<ContainerProps> = ({showButton, setShowButton}) => {

    const [mesasInfo, setMesasInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setShowButton(0)
                let mesas = await getMesas('Sala VIP');
                setMesasInfo(mesas || []); // Utiliza un array vacío si mesas es undefined
            } catch (error) {
                console.error('Error fetching areas:', error);
            }
        };

        fetchData();
    }, []);

    if (!mesasInfo.length) {
        return null;
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa2 mesaInfo={mesasInfo[0]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 mesaInfo={mesasInfo[1]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 mesaInfo={mesasInfo[2]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa2 mesaInfo={mesasInfo[3]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 mesaInfo={mesasInfo[4]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa2 mesaInfo={mesasInfo[5]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="centerColumn">
                    <Mesa4 mesaInfo={mesasInfo[6]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
                <IonCol className="centerColumn">
                    <Mesa4 mesaInfo={mesasInfo[7]} showButton={showButton} setShowButton={setShowButton}/>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default VIPset