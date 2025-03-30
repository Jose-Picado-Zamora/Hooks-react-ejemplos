import { useRef } from 'react'; // Importamos useRef

function App() {
  // Creamos una referencia para el input
  const inputRef = useRef();

  return (
    <div style={{ padding: 20 }}>
      <h2>useRef</h2>
      <input ref={inputRef} placeholder="Hola mundo" />
      <button onClick={() => inputRef.current.focus()}>
        Enfocar input
      </button>
    </div>
  );
}

export default App;
