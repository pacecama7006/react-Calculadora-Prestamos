import React, {Fragment} from 'react';
import Header from './componentes/Header';


function App() {
  return (
    <Fragment>
      {/* Mando llamar al componente Header
      y le mando un props llamado título
      y esta información se la va a pasar al
      componente hijo, que en este caso es Header */}
      <Header
        titulo="Cotizador de préstamos"
      />
    </Fragment>
  );
}

export default App;
