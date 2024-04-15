import React, { useState } from 'react';
import { Horarioconmasdemanda } from '../Controladores/controller';

function Horario() {
    const [fechaInicio, setFechaInicio] = useState<string>('');
    const [fechaFin, setFechaFin] = useState<string>('');

    const handleFechaInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFechaInicio(value);
    };

    const handleFechaFinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFechaFin(value);
    };

    const handleEnviarClick = async () => {
        try {
            const data = await Horarioconmasdemanda(fechaInicio, fechaFin);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={fechaInicio}
                onChange={handleFechaInicioChange}
                placeholder="Fecha de inicio (YYYY-MM-DD)"
            />
            <button onClick={handleEnviarClick}>Enviar</button>
            <input
                type="text"
                value={fechaFin}
                onChange={handleFechaFinChange}
                placeholder="Fecha de fin (YYYY-MM-DD)"
            />
            <button onClick={handleEnviarClick}>Enviar</button>
        </div>
    );
}

export default Horario;
