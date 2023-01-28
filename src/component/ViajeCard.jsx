import React from "react";

function ViajeCard({ viaje }) {
  console.log(viaje)
  return (
    <div className="bg-gray-500">
    
      <p>{viaje.titulo}</p>
      <p>{viaje.precio}</p>
      <p>{viaje.fecha_ida}</p>
      <p>{viaje.fecha_vuelta}</p>
      <p>{viaje.imagen}</p>
      <p>{viaje.descripcion}</p>
      <p>{viaje.disponibles}</p>
      <p>{viaje.slug}</p>
    </div>
  );
}

export default ViajeCard;
