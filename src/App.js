import './App.css';
import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';
import ImgLogo from './componentes/ImgLogo';
import Boton from './componentes/Botones';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { FiArrowLeft } from "react-icons/fi";
// import Historial from './componentes/historial';

// La función App es el componente principal de la aplicación. Aquí se está usando el hook useState para inicializar dos estados, input y historial. input representa la entrada actual en la calculadora y historial representa la lista de operaciones realizadas.

function App() {

  const [input, setInput] = useState('');

  // Aquí se utiliza el hook useState de React para crear un estado en la aplicación llamado input, que inicialmente es una cadena vacía. La segunda parte de la declaración, setInput, es una función que se utiliza para actualizar el estado input.

  const [historial, setHistorial] = useState([]);

  // Al igual que con input y setInput, se utiliza el hook useState para crear el estado historial, que es un array vacío en este caso, y setHistorial, que se utiliza para actualizar el estado historial.

  const agregarInput  = valor => {
    const inputString = input.toString(); // convierte el valor de la variable input en una cadena de texto (string). Esta conversión se realiza porque el operador slice() que se utiliza posteriormente en la línea de código siguiente espera una cadena de texto como argumento.
    if ((['+', '-', '*', '/'].includes(inputString.slice(-1)) && ['+', '-', '*', '/'].includes(valor)) || (inputString === '' && ['*', '/'].includes(valor))) { //verifica si el último carácter del estado de input (almacenado en la variable inputString) es un símbolo de operación (+, -, * o /) y si el carácter presionado (key) también es un símbolo de operación. Si ambos son símbolos de operación, la función devuelve null y no agrega el carácter a input. Tampoco permite colocar los simbolos de multiplicacion o division primero.
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

  const handleKeyDown = (event) => {
    const key = event.key; //Obtiene la tecla presionada del objeto evento y lo almacena en la constante key
    const allowedKeys = ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '(', ')']; //Obtiene la tecla presionada del objeto evento y lo almacena en la constante key
  
    const inputString = input.toString(); // convierte el valor de la variable input en una cadena de texto (string). Esta conversión se realiza porque el operador slice() que se utiliza posteriormente en la línea de código siguiente espera una cadena de texto como argumento.
    if (allowedKeys.includes(key)) {  //Compara si la tecla presionada está incluida en el arreglo de teclas permitidas.
      // verifica si el 
      if ((['+', '-', '*', '/'].includes(inputString.slice(-1)) && ['+', '-', '*', '/'].includes(key)) || (inputString === '' && ['*', '/'].includes(key))) { //verifica si el último carácter del estado de input (almacenado en la variable inputString) es un símbolo de operación (+, -, * o /) y si el carácter presionado (key) también es un símbolo de operación. Si ambos son símbolos de operación, la función devuelve null y no agrega el carácter a input. Tampoco permite colocar los simbolos de multiplicacion o division primero.
        alert ('Error')
        return; 
      }
      setInput(input + key); //Si la tecla es permitida, se concatena al input actual. Esto permite que el usuario pueda ingresar números y operadores desde el teclado.
    } else if (key === 'Backspace') {  //Si la tecla presionada es "Backspace", se elimina el último carácter del input actual.
      setInput(input.slice(0, -1)); //Elimina el último carácter del input actual utilizando el método slice de los strings.
    } else if (key === 'Enter') { //Si la tecla presionada es "Enter", se llama a la función calcularResultado
      calcularResultado();
    }
  };
  

  useEffect(() => { //Declara un efecto que se ejecutará después de que se haya renderizado el componente.
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  //Agrega un event listener para detectar cuando se presionan teclas y llama a la función handleKeyDown. Luego, se retorna una función que remueve el event listener cuando el componente se desmonta para evitar posibles memory leaks.

  return (
    <div className='App'>
      <ImgLogo/>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'> 
          <Boton manejarClic={borrarCaracter}> <FiArrowLeft className="tarea-icono" /></Boton>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>(</Boton>
          <Boton manejarClic={agregarInput}>)</Boton>
        </div>
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
          
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <BotonClear manejarClear={() => setInput('')}>
            AC
          </BotonClear>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={calcularResultado}>=</Boton>
          {/* <Historial historial={historial} />  */}
        </div>
      </div>
    </div>
  );
}

export default App;
