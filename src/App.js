import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import ImgLogo from './componentes/ImgLogo';
import Boton from './componentes/Botones';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Historial from './componentes/historial';

function App() {

  const [input, setInput] = useState('');

  const [historial, setHistorial] = useState([]);


  const agregarInput = valor => {
    const inputString = input.toString();
    if ((['+', '-', '*', '/'].includes(inputString.slice(-1)) && ['+', '-', '*', '/'].includes(valor)) || (inputString === '' && ['*', '/'].includes(valor))) {
      alert ('Error')
    } else { 
      setInput (inputString + valor);
    }
  }

  const calcularResultado = () => {
    if (input) {
      const resultado = evaluate(input);
      setInput(resultado);
      setHistorial([...historial, { operacion: input, resultado }]);
    } else {
      alert('Por favor ingrese valores para realizar los cálculos');
    }
  };

  const borrarCaracter = () => {
    setInput(input.slice(0, -1));
  }
  

  return (
    <div className='App'>
      <ImgLogo/>
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
          <BotonClear manejarClear={() => setInput('')}>
            clear
          </BotonClear>
          <Boton manejarClic={borrarCaracter}>Borrar</Boton>
          {/* <Historial historial={historial} />  */}
        </div>
      </div>
    </div>
  );
}

export default App;
