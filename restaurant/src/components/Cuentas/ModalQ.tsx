import { IonCard, IonButton, IonIcon, IonRow, IonInput } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { useState } from 'react';

interface ContainerProps { 
    cunetaId: number,
    setQueja: (queja: boolean) => void
 }

const ModalQ: React.FC<ContainerProps> = ({cunetaId, setQueja}) => {

    const [motivo1, setMotivo1] = useState('')
    const [motivo2, setMotivo2] = useState('')
    const [motivo3, setMotivo3] = useState('')
    const [empleado, setEmpleado] = useState('')
    const [alimento, setAlimento] = useState('')

    const HandleCerrar = () => {
        setQueja(false)
    }

    const HandleClickQueja = () => {

    }

    return (
        <IonCard className="back">
            <IonButton onClick={HandleCerrar}>
                <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
            <div style={{display: 'flex', flexDirection: 'column', overflow: 'auto'}}>
            
            //--------------------------------------------------------------------------------------------------------------------

            <div>
                <p>Queja normal</p>
                <IonRow>
                    <IonInput label='Motivo' value={motivo1} onIonChange={(e) => setMotivo3(e.detail.value!)}></IonInput>
                </IonRow>
                <IonButton>Hacer queja</IonButton>
            </div>
            //--------------------------------------------------------------------------------------------------------------------            <div>
            <p>Queja empleado</p>
                <IonRow>
                <IonInput label='Motivo' onIonChange={(e) => setMotivo2(e.detail.value!)}></IonInput>
                </IonRow>
                <IonRow>
                <IonInput label='Empleado' onIonChange={(e) => setEmpleado(e.detail.value!)}></IonInput>
                </IonRow>
                <IonButton>Hacer queja</IonButton>
            </div>
            //--------------------------------------------------------------------------------------------------------------------

            <div>
            <p>Queja alimento</p>
                <IonRow>
                <IonInput label='Motivo' value={motivo3} onIonChange={(e) => setMotivo3(e.detail.value!)}></IonInput>
                </IonRow>
                <IonRow>
                <IonInput label='Alimento' onIonChange={(e) => setAlimento(e.detail.value!)}></IonInput>
                </IonRow>
                <IonButton>Hacer queja</IonButton>
            </div>
            //--------------------------------------------------------------------------------------------------------------------

            </div>
                
        </IonCard>
    )
}

export default ModalQ