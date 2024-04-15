// Encuesta.js
import React, { useState } from 'react';
import './encuestas.css';

function Encuesta() {
    const [nombre, setNombre] = useState('');
    const [pregunta1, setPregunta1] = useState('');
    const [pregunta2, setPregunta2] = useState('');

    const handleSubmit = () => {
        console.log('Nombre:', nombre);
        console.log('Pregunta 1:', pregunta1);
        console.log('Pregunta 2:', pregunta2);
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
                    <label>Pregunta 1</label>
                    <input
                        type="number"
                        value={pregunta1}
                        onChange={(e) => setPregunta1(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Pregunta 2</label>
                    <input
                        type="number"
                        value={pregunta2}
                        onChange={(e) => setPregunta2(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
    );
}

export default Encuesta;
