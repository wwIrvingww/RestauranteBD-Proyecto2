import { IonButton } from "@ionic/react"
import { useEffect, useState } from "react"
import { obtainCuentas } from "../components/Controladores/controller"
import '../components/Asignacion/style.css'
import Shadow from "../components/Cuentas/Shadow"
import ModalC from "../components/Cuentas/ModalC"
import ModalP from "../components/Cuentas/ModalP"
import ModalQ from "../components/Cuentas/ModalQ"

interface ContainerProps {  }

interface Cuenta {
    id: number,
    mesa_id: number
}

const Cunetas: React.FC<ContainerProps> = () => {

    const [cuentas, setCuentas] = useState<Cuenta[]>([])
    const [cerrar, setCerrar] = useState(false)
    const [pedidos, setPedidos] = useState(false)
    const [queja, setQueja] = useState(false)
    const [mesaIdClicked, setMesaIdClicked] = useState<number | null>(null);
    const [cuentaIdClicked, setCuentaIdClicked] = useState<Number | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setCuentas(await obtainCuentas())
        }

        fetchData()
    }, [])

    const handlePedidosClick = (mesaId: number) => {
        setMesaIdClicked(mesaId)
        setPedidos(true)
    }

    const handleCerrarClick = (mesaId: number) => {
        setMesaIdClicked(mesaId);
        setCerrar(true)
    }

    const handleQuejaClick = (cuentaId: number) => {
        setCuentaIdClicked(cuentaId)
        setQueja(true)
    }

    return (
        <div className="list">
            {cuentas.map((cuenta) => (
                <div key={cuenta.id}>
                    <IonButton style={{ width: '60%' }} onClick={() => handlePedidosClick(cuenta.mesa_id)}>Cuenta: {cuenta.id} Mesa: {cuenta.mesa_id}</IonButton>
                    <IonButton color='secondary' onClick={() => handleQuejaClick(cuenta.id)}>Hacer queja</IonButton>
                    <IonButton color='danger' onClick={() => handleCerrarClick(cuenta.mesa_id)}>Cerrar cuenta</IonButton>
                    {(cerrar && (mesaIdClicked === cuenta.mesa_id)) && (
                        <>
                            <Shadow />
                            <ModalC mesaId={cuenta.mesa_id} setCerrar={setCerrar}/>
                        </>
                    )}
                    {(pedidos && (mesaIdClicked === cuenta.mesa_id)) && (
                        <>
                            <Shadow />
                            <ModalP mesaId={cuenta.mesa_id} setCerrar={setPedidos}/>
                        </>
                    )}
                    {(queja && (cuentaIdClicked === cuenta.id) && (
                        <>
                        <Shadow />
                        <ModalQ cunetaId={cuenta.id} setQueja={setQueja}/>
                    </>
                    )
                    )}
                </div>
            ))}
        </div>
    )
}

export default Cunetas
