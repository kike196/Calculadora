import React from "react";

// El componente Historial muestra un registro de las operaciones anteriores
// realizadas por el usuario en la calculadora.
function Historial({ historial }) {
  return (
    // El historial se representa como una lista de elementos div,
    // cada uno con un índice único y mostrando la operación y su resultado.
    <div className="historial">
      <h2>Historial</h2>
      {historial.map((item, index) => (
        <div key={index}>
          <span>{item.operacion}</span>
          <span>= {item.resultado}</span>
        </div>
      ))}
    </div>
  );
}

export default Historial;
