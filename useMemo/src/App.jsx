// Importamos useMemo para memorizar valores y useState para manejar estado
import { useMemo, useState } from "react";

function App() {
    // Declaramos una variable de estado llamada 'numero' con valor inicial 1
    const [numero, setNumero] = useState(1);

    // Calculamos un valor memorizado usando useMemo
    // Este valor solo se recalculará cuando 'numero' cambie
    const resultado = useMemo(() => {
        console.log("Calculando..."); // Solo se ejecuta si 'numero' cambia
        return numero * 1000;
    }, [numero]); // Dependencia: solo recalcular si cambia 'numero'

    return (
        <div style={{ padding: 20 }}>
            <h2>useMemo</h2>

            {/* Input para cambiar el valor de 'numero' */}
            <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(Number(e.target.value))}
            />

            {/* Mostramos el resultado memorizado */}
            <p>Resultado: {resultado}</p>
        </div>
    );
}

export default App;
