import './App.css';
import FreeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Boton from './componentes/Botones';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';

function App() {

  const [input, setImput] = useState('');

  const agregarInput = valor => {
    setImput (input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setImput(evaluate(input));
    } else {
      alert ('Por favor ingrese valores para realizar los cálculos')
    }
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={FreeCodeCampLogo} 
          className='freecodecamp-logo' 
          alt="logo de freecodecamp" />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'> 
          <BotonClear manejarClear={() => setImput('')}>
            clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
