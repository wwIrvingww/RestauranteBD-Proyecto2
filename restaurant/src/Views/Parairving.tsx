import React from 'react';
import Notas_Comida from '../components/Comidas/Notas_Comida';

function OtroComponente() {
  const elementos = [
    { titulo: "Ensalada", orden: "#48", hora: "13:00" },
    { titulo: "Ultimate Reuben", orden: "#49", hora: "13:15" },
    { titulo: "Fig & Berry Plate", orden: "#50", hora: "13:30" }
    
  ];

  return (
    <div>
      <Notas_Comida elementos={elementos}/>
    </div>
  );
}

export default OtroComponente;



