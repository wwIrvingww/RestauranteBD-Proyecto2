import React, { useEffect, useState } from 'react';
import Notas_Comida from '../components/Comidas/Notas_Comida';
import { getComidas } from '../components/Controladores/controller';

function OtroComponente() {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    fetchComidas();
  }, []);

  const fetchComidas = async () => {
    try {
      const comidasData = await getComidas();
      setComidas(comidasData);
    } catch (error) {
      console.error('Error al obtener las comidas:', error);
    }
  };

  return (
    <div>
      <Notas_Comida elementos={comidas}/>
    </div>
  );
}

export default OtroComponente;
