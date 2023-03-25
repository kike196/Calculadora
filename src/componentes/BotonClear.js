import React from "react";
import '../estilos/BotonClear.css';

// El componente BotonClear muestra un botón que, cuando se hace clic,
// borra la entrada actual del usuario en la calculadora.
const BotonClear = (props) =>(
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
