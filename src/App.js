import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';


function App() {
  /**
   * Definir el state de cantidad en el formulario. Lo pongo aquí, porque la información
   * viaja de padere a hijo y no de hijo a padre. App.js es padre de Formulario.js
   * Una vez que utilizamos la función useState(), retorna dos valores. El primero
   * una variable que va a contener el valor (cantidad en este caso), y el otro
   * una función que va a estar interactuando y guardando el state que estamos
   * creando (guardarCantidad). Como son números lo que manejamos en cantidad
   * lo podemos inicializar con el 0
   * Variable que me va a permitir tener la cantidad y su estado
   */
   const [cantidad, guardarCantidad] = useState(0);
   const [plazo, guardarPlazo] = useState('');

  return (
    <Fragment>
      {/* Mando llamar al componente Header
      y le mando un props llamado título
      y esta información se la va a pasar al
      componente hijo, que en este caso es Header */}
      <Header
        titulo="Cotizador de préstamos"
      />

      <div className="container">
        <Formulario 
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
        />
      </div>
    </Fragment>
  );
}

export default App;
