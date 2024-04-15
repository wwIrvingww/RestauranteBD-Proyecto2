import { IonButton, IonCard, IonIcon } from "@ionic/react";
import { closeOutline } from 'ionicons/icons';
import Nombre from "./ModalElements/Nombre";
import NIT from "./ModalElements/NIT";
import Direccion from "./ModalElements/Direccion";
import { useEffect, useState } from "react";
import { closeCuenta, createOrden, getBebidas, getComidas, obtainBebida, obtainComida } from "../Controladores/controller";

interface ContainerProps { 
    setCerrar: (cerrar: boolean) => void,
    mesaId: number
}

const ModalP: React.FC<ContainerProps> = ({setCerrar, mesaId}) => {
    const [comidas, setComidas] = useState<string[]>([]);
    const [bebidas, setBebidas] = useState<string[]>([]);
    const [alimentos, setAlimentos] = useState<string[]>([])
    const [comida, setComida] = useState<string>('')
    const [bebida, setBebida] = useState<string>('')

    useEffect(() => {
        const fetchData = async () => {
            const comidaResult = await obtainComida();
            const bebidaResult = await obtainBebida();
            setComidas(comidaResult.map((comida: any) => comida.nombre));
            setBebidas(bebidaResult.map((bebida: any) => bebida.nombre));
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(alimentos);
    }, [alimentos]); 

    const handleClick = () => {
        setCerrar(false);
    }

    const handleClickCuenta = async () => {
        const date : Date = new Date()

        const hour: number = date.getHours()
        const minute: number = date.getMinutes()
        const sec: number = date.getSeconds()
        const format: string = (minute < 10) ? '0': ''
        const formatS: string = (sec < 10) ? '0' : ''

        const hora = hour+':'+format+minute+':'+format+sec
        alimentos.forEach(item => {
            if (item != '') {
                createOrden(item.trim(), hora)
            }
        })
        setCerrar(false);
    }

    const handleAgregarComida = () => {
        setAlimentos([...alimentos, comida])
        setComida('')
        console.log(alimentos)
    }

    const handleAgregarBebida = () => {
        setAlimentos([...alimentos, bebida])
        setBebida('')
        console.log(alimentos)
    }

    return (
        <IonCard className="back">
            <IonButton onClick={handleClick}>
                <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
            <h1>Mesa: {mesaId}</h1>
            <div style={{display: 'flex', alignContent: 'center'}}>
                <label htmlFor="comida">Comida:</label>
                <input list="comida" name="comida" value={comida} onChange={(e) => setComida(e.target.value)} />
                <datalist id='comida'>
                    {comidas.map((comida, index) => (
                        <option key={index} value={comida}></option>
                    ))}
                </datalist>
                <IonButton color='success' onClick={handleAgregarComida}>Agregar</IonButton>
            </div>
            <div style={{display: 'flex', alignContent: 'center'}}>
                <label htmlFor="bebida">Bebida:</label>
                <input list="bebida" name="bebida" value={bebida} onChange={(e) => setBebida(e.target.value)}/>
                <datalist id='bebida'>
                    {bebidas.map((bebida, index) => (
                        <option key={index} value={bebida}></option>
                    ))}
                </datalist>
                <IonButton color='success' onClick={handleAgregarBebida}>Agregar</IonButton>
            </div>

            <IonCard>
        {/* Contenido anterior... */}
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {alimentos.map((alimento, index) => (
                <div key={index}>{alimento}</div>
            ))}
        </div>
        {/* Resto del contenido... */}
    </IonCard>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <IonButton color='success' onClick={handleClickCuenta}>Hacer pedido</IonButton>
            </div>
        </IonCard>
    )
}

export default ModalP;
