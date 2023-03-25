import React from "react";
import '../estilos/Boton.css';

// El componente Boton muestra un botón interactivo en la calculadora.
// Puede ser un operador o un número, y se le puede asignar una función 
// manejadora para realizar una acción en respuesta a un clic.
function Boton(props) {

  // La función esOperador determina si un botón es un operador,
  // es decir, cualquier símbolo que no sea un número o un punto decimal.
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    // El contenido del botón se representa en su propio div, que 
    // se puede asignar una clase adicional de operador si es un operador.
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
