import { useEffect } from 'react'; // Importamos el Hook useEffect

function App() {
  // Ejecutamos una alerta al montar el componente
  useEffect(() => {
    alert("Hola mundo desde useEffect");
  }, []); // El arreglo vacío significa que solo se ejecuta una vez

  return (
    <div style={{ padding: 20 }}>
      <h2>useEffect</h2>
      <p>Revisa la alerta al cargar la página.</p>
    </div>
  );
}

export default App;
