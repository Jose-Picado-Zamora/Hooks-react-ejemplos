import { useState, useCallback } from 'react'; // Importamos useState y useCallback

function App() {
  const [mensaje, setMensaje] = useState("Hola mundo");

  // Creamos una función memorizada que cambia el mensaje
  const cambiarMensaje = useCallback(() => {
    setMensaje("¡useCallback funcionando!");
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>useCallback</h2>
      <p>{mensaje}</p>
      <button onClick={cambiarMensaje}>Actualizar mensaje</button>
    </div>
  );
}

export default App;
