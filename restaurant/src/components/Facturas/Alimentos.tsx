import React from "react";

interface AlimentoProps {
    alimentos: { cantidad: number, nombre: string, precioUnitario: number }[];
}

const Alimentos: React.FC<AlimentoProps> = ({ alimentos }) => {
    return (
        <div style={{marginTop:'5%'}}>
            <p style={{ justifyContent:'center', textAlign:'center'}}>Alimentos</p>
            <ul style={{ listStyleType: 'none' }}>
                {alimentos.map((alimento, index) => (
                    <li key={index}>
                        {alimento.cantidad} {alimento.nombre} {alimento.precioUnitario.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Alimentos;
