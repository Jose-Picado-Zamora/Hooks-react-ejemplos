// Importamos createContext para crear un contexto y useContext para consumirlo
import { createContext, useContext } from 'react';

// Creamos el contexto con un valor por defecto
const MensajeContext = createContext("Hola mundo desde useContext");

// Componente que consume el contexto
function MostrarMensaje() {
  // Obtenemos el valor actual del contexto usando useContext
  const mensaje = useContext(MensajeContext);

  // Mostramos el valor que viene del contexto
  return <p>{mensaje}</p>;
}

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>useContext</h2>

      {/* Proveemos un nuevo valor al contexto desde este punto hacia abajo */}
      <MensajeContext.Provider value="¡Mensaje compartido!">
        {/* El componente hijo podrá acceder al valor del contexto */}
        <MostrarMensaje />
      </MensajeContext.Provider>
    </div>
  );
}

export default App;
