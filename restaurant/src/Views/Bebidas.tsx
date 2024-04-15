import React, { useEffect, useState } from 'react';
import Notas_Bebida from '../components/Comidas/Notas_Comida';
import { getBebidas } from '../components/Controladores/controller';

function OtroComponente() {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    fetchComidas();
  }, []);

  const fetchComidas = async () => {
    try {
      const bebidasData = await getBebidas();
      setBebidas(bebidasData);
    } catch (error) {
      console.error('Error al obtener las comidas:', error);
    }
  };

  return (
    <div>
      <Notas_Bebida elementos={bebidas}/>
    </div>
  );
}

export default OtroComponente;
