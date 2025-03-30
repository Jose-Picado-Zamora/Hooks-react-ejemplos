import { useState } from 'react'; // Importamos el Hook useState

function App() {
   // Declaramos una variable de estado llamada mensaje
  const [mensaje, setMensaje] = useState("Hola mundo");

  return (
    <div style={{ padding: 20 }}>
      <h2>useState</h2>
      <p>{mensaje}</p>
      <button onClick={() => setMensaje("¡Hola desde useState!")}>
        Cambiar mensaje
      </button>
    </div>
  );
}

export default App;
