// Encuesta.js
import React, { useState } from 'react';
import './encuestas.css';
import { IonButton } from '@ionic/react';
import { send } from 'ionicons/icons';
import { sendSurvey } from '../Controladores/controller';

function Encuesta() {
    const [nombre, setNombre] = useState('');
    const [pregunta1, setPregunta1] = useState('');
    const [pregunta2, setPregunta2] = useState('');

    const handleSubmit = async () => {
        let id = Math.floor(Math.random() * 1000)
        const date: Date = new Date()
        const year: number = date.getFullYear()
        const month: number = date.getMonth()
        const day: number = date.getDate()

        const format: string = (month < 10) ? '0': ''

        const fecha: string = year+'-'+format+month+'-'+day

        setNombre('')
        setPregunta1('')
        setPregunta2('')

        await sendSurvey(id.toString(), nombre, fecha, parseFloat(pregunta1), parseFloat(pregunta2))
    };

    return (
        <div className="encuesta-container">
            <h2>Encuesta</h2>
            <div className="encuesta-form">
                <div className="input-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Califique la amabilidad del mesero:</label>
                    <input
                        type="number"
                        value={pregunta1}
                        onChange={(e) => setPregunta1(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Califique la exactitud de lo recibido respecto a lo solicitado al mesero</label>
                    <input
                        type="number"
                        value={pregunta2}
                        onChange={(e) => setPregunta2(e.target.value)}
                        onClick={handleSubmit}
                    />
                </div>
                <IonButton>Calificar</IonButton>
            </div>
        </div>
    );
}

export default Encuesta;
