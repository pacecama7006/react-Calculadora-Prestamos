import React, {Fragment} from 'react'
// Un componente siempre es una función y siempre tienes que 
//retornar algo.
/**Con los props recibo información del componente padre
 * Puedo hacerle destructuring al props y pasarle sólo
 * el nombre del prop
 */
// function Header(props) {
function Header({titulo}) {
    
    // console.log(props);
    // El return es una función de react y es lo que se va a mostrar
    // en pantalla
    
    return(
        // Con las llaves mando llamar a código js, y le pongo  el
        // propos y el nombre del props que utilicé en la vista App
        <Fragment>
            {/* <h1>{props.titulo}</h1>    */}
            <h1>{titulo}</h1>   
        </Fragment>
    )
}

export default Header;
