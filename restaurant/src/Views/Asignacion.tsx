import { useEffect, useState } from "react"
import Selector from "../components/Asignacion/Selector"
import Tableset from "../components/Asignacion/Tableset"
import { IonButton, IonCard, IonRow } from "@ionic/react"
import '../components/Asignacion/style.css'
import Modal from "../components/Asignacion/ButtonAsig"
import ButtonAsig from "../components/Asignacion/ButtonAsig"

interface ContainerProps {  }

interface Tables {
    id: number,
    movable: boolean,
    capacidad: number
}

const Asignacion: React.FC<ContainerProps> = () => {

    const [area, setArea] = useState('')
    const [showButton, setShowButton] = useState(0)
    const [myTables, setMyTables] = useState<Tables[]>([])
    const [asignation, setAsignation] = useState(false)

    const handleClick = async () => {
        setAsignation(true)
        
    }

    return (
        <>
            <Selector area={area} setArea={setArea}/>
            <Tableset 
                area={area} 
                showButton={showButton} 
                setShowButton={setShowButton} 
                myTables={myTables}
                setMyTables={setMyTables}/>
            {(showButton > 0) && 
            <IonRow className="centerColumn">
                <IonButton onClick={handleClick}>Asignar mesas</IonButton>
            </IonRow>}
        </>
    )

}

export default Asignacion