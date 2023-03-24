import React from "react";
import FreeCodeCampLogo from '../imagenes/FreeCodeCamp_logo.png';
import '../App.css';

const ImgLogo = (props) => (
  <div className='freecodecamp-logo-contenedor'>
    <img 
      src={FreeCodeCampLogo} 
      className='freecodecamp-logo' 
      alt="logo de freecodecamp" />
  </div>
);

export default ImgLogo
