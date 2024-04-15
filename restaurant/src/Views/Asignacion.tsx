import { useState } from "react"
import Selector from "../components/Asignacion/Selector"
import Tableset from "../components/Asignacion/Tableset"
import { IonButton, IonInput, IonRow } from "@ionic/react"
import '../components/Asignacion/style.css'
import { createCuenta, makeUnion } from "../components/Controladores/controller"

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
    const [cantidadPersonas, setCantidadPersonas] = useState('')

    const handleClick = async () => {

        const date: Date = new Date()
        const year: number = date.getFullYear()
        const month: number = date.getMonth()
        const day: number = date.getDate()

        const hour: number = date.getHours()
        const minute: number = date.getMinutes()
        const second: number = date.getSeconds()

        const formatH: string = (minute < 10) ? '0': ''
        const formatS: string = (second < 10) ? '0' : ''
        const formatD: string = (month < 10) ? '0': ''

        const fecha : string = year+'-'+formatD+(month+1)+'-'+day
        const hora : string = hour+':'+formatH+minute+':'+formatS+second

        const table1 = myTables[0]
        const index = myTables.indexOf(table1)
        myTables.splice(index)
        if (myTables.length > 0 && cantidadPersonas != ""){
            for (const item of myTables) {
                await makeUnion(table1.id, item.id);
            }
            await createCuenta(fecha,hora,table1.id,parseInt(cantidadPersonas))
        } else if (cantidadPersonas != ""){
            await createCuenta(fecha,hora,table1.id,parseInt(cantidadPersonas))
        }   
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
            <IonRow className="centerColumn">
                <IonInput 
                label="Cantidad de persona:"
                value={cantidadPersonas}
                onIonChange={(e) => setCantidadPersonas(e.detail.value!)}></IonInput>
            </IonRow>
            {(showButton > 0) && 
            <IonRow className="centerColumn">
                <IonButton onClick={handleClick}>Asignar mesas</IonButton>
            </IonRow>}
        </>
    )

}

export default Asignacion