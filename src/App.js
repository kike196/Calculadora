import './App.css';
import FreeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Botones';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={FreeCodeCampLogo} 
          className='freecodecamp-logo' 
          alt="logo de freecodecamp" />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'> 
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'> </div>
        <div className='fila'> </div>
        <div className='fila'> </div>
        <div className='fila'> </div>
      </div>
    </div>
  );
}

export default App;
