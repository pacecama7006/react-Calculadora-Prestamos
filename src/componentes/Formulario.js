import React, {useState} from "react";

const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo}) => {
  // La función de useState nos ayuda a definir el state. Todo lo
  // que sea interactivo de la aplicación va a necesitar
  // un estado. En este caso la cantidad y el plazo
  const [error, guardarError]= useState(false);

  // Función que me permite leer la cantidad del input
  const leerCantidad = (e) =>{
    // console.log(e.target.value);
    // Cambio el state de cantidad utilizando la función guardarCantidad
    // guardarCantidad(parseInt(e.target.value));
  };

  /**Cuando el usuario hace submit */
  const calcularPrestamo = e =>{
    e.preventDefault();

    // console.log('Enviando formulario');

    //Validar
    if (cantidad === 0 || plazo === '') {
      // console.log('Hay un error');
      guardarError(true);
    }

    // Realizar la cotización
  }

  return (
    <form onSubmit={ calcularPrestamo }>
      <div className="row">
        <div>
          <label>Cantidad Prestamo</label>
          {/* En react los eventos empiezan con on, en este caso onChange y le
          pasamos una función (leerCantidad) */}
          <input
            className="u-full-width"
            type="number"
            placeholder="Ejemplo: 3000"
            // onChange={leerCantidad}
            onChange={e => guardarCantidad(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Plazo para Pagar</label>
          <select 
            className="u-full-width"
            onChange={e => guardarPlazo(parseInt(e.target.value))}
          >
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Calcular"
            className="button-primary u-full-width"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
