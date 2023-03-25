import React from "react";
import '../estilos/Pantalla.css';

// El componente Pantalla muestra la entrada actual del usuario
// como una cadena de texto en la pantalla de la calculadora.

const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>
);

export default Pantalla;
