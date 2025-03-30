import { useReducer } from 'react'; // Importamos useReducer

// Función reductora que maneja el estado
function reducer(estado, accion) {
  switch (accion.tipo) {
    case "cambiar":
      return { mensaje: "Hola mundo con useReducer" };
    default:
      return estado;
  }
}

function App() {
  // Creamos el estado inicial y el dispatch
  const [estado, dispatch] = useReducer(reducer, {
    mensaje: "Hola mundo"
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>useReducer</h2>
      <p>{estado.mensaje}</p>

      {/* Al hacer clic, cambiamos el estado usando dispatch */}
      <button onClick={() => dispatch({ tipo: "cambiar" })}>
        Cambiar mensaje
      </button>
    </div>
  );
}

export default App;
