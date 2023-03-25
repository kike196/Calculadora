import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import ImgLogo from './componentes/ImgLogo';
import Boton from './componentes/Botones';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
// import Historial from './componentes/historial';

// La función App es el componente principal de la aplicación. Aquí se está usando el hook useState para inicializar dos estados, input y historial. input representa la entrada actual en la calculadora y historial representa la lista de operaciones realizadas.

function App() {

  const [input, setInput] = useState('');

  // Aquí se utiliza el hook useState de React para crear un estado en la aplicación llamado input, que inicialmente es una cadena vacía. La segunda parte de la declaración, setInput, es una función que se utiliza para actualizar el estado input.

  const [historial, setHistorial] = useState([]);

  // Al igual que con input y setInput, se utiliza el hook useState para crear el estado historial, que es un array vacío en este caso, y setHistorial, que se utiliza para actualizar el estado historial.

  const agregarInput = valor => {
    const inputString = input.toString();
    if ((['+', '-', '*', '/'].includes(inputString.slice(-1)) && ['+', '-', '*', '/'].includes(valor)) || (inputString === '' && ['*', '/'].includes(valor))) {
      alert ('Error')
    } else { 
      setInput (inputString + valor);
    }
  }

  // Esta función se utiliza para manejar los clics de los botones numéricos y de operación en la calculadora. Toma un valor como argumento (el valor del botón que se ha hecho clic) y primero convierte el valor actual del input a una cadena utilizando toString(). Luego, comprueba si el último carácter del input es una operación (+, -, * o /) y si el valor que se ha hecho clic también es una operación. Si es así, se muestra una alerta de error. Si el input está vacío y el valor que se ha hecho clic es * o /, también se muestra una alerta de error. Si ninguna de estas condiciones se cumple, la función actualiza el estado input agregando el valor que se ha hecho clic a la cadena actual.

  const calcularResultado = () => {
    if (input) {
      const resultado = evaluate(input);
      setInput(resultado);
      setHistorial([...historial, { operacion: input, resultado }]);
    } else {
      alert('Por favor ingrese valores para realizar los cálculos');
    }
  };

  // Esta función se utiliza para manejar el clic en el botón "=" y realizar el cálculo correspondiente en la calculadora. Primero comprueba si hay un valor en el input, y si no lo hay, muestra una alerta de error. Si hay un valor en el input, utiliza la función evaluate de la librería mathjs para calcular el resultado y actualizar el estado input con el resultado. Además, agrega una entrada al historial de cálculo que registra la operación y el resultado.

  const borrarCaracter = () => {
    setInput(input.slice(0, -1));
  }
  
  // Esta función se utiliza para manejar el clic en el botón "Borrar", que borra el último carácter del input. Utiliza el método slice para crear una nueva cadena que contiene todos los caracteres del input excepto el último, y luego actualiza el estado input con esta nueva cadena.

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
