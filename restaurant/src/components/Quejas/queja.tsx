import React, { useState } from 'react';
import './queja.css';

function Queja() {
    const [nombre, setNombre] = useState('');
    const [pregunta1, setPregunta1] = useState('');

    const handleSubmit = () => {
        console.log('Nombre:', nombre);
        console.log('Pregunta 1:', pregunta1);
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
                    <label>¿Cuál es la queja?</label>
                    <input
                        type="text"
                        value={pregunta1}
                        onChange={(e) => setPregunta1(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
    );
}

export default Queja;
