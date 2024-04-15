import { IonButton } from "@ionic/react"
import { useEffect, useState } from "react"
import { obtainCuentas } from "../components/Controladores/controller"
import '../components/Asignacion/style.css'
import Shadow from "../components/Cuentas/Shadow"
import ModalC from "../components/Cuentas/ModalC"

interface ContainerProps {  }

interface Cuenta {
    id: number,
    mesa_id: number
}

const Cunetas: React.FC<ContainerProps> = () => {

    const [cuentas, setCuentas] = useState<Cuenta[]>([])
    const [cerrar, setCerrar] = useState(false)
    const [mesaIdClicked, setMesaIdClicked] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setCuentas(await obtainCuentas())
        }

        fetchData()
    }, [])

    const handleCerrarClick = (mesaId: number) => {
        setMesaIdClicked(mesaId);
        setCerrar(true)
    }

    return (
        <div className="list">
            {cuentas.map((cuenta) => (
                <div key={cuenta.id}>
                    <IonButton style={{ width: '81%' }}>Cuenta: {cuenta.id} Mesa: {cuenta.mesa_id}</IonButton>
                    <IonButton color='danger' onClick={() => handleCerrarClick(cuenta.mesa_id)}>Cerrar cuenta</IonButton>
                    {(cerrar && (mesaIdClicked === cuenta.mesa_id)) && (
                        <>
                            <Shadow />
                            <ModalC mesaId={cuenta.mesa_id} setCerrar={setCerrar}/>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Cunetas
