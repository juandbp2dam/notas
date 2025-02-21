import "./App.css";
import { getAllNotas } from "./notasServer";
import { useEffect } from "react";
import ListadoNotas from "./components/ListadoNotas";
import { useState } from "react";
function App() {
  const [notas, setNotas] = useState([]);

  const loadNotas = async () => {
    try {
      const notasServer = await getAllNotas();
      setNotas(notasServer);
    } catch (error) {
      console.error("Error al cargar las notas:", error);
    }
  };

  useEffect(() => {
    loadNotas();
  }, []);

  const cambioNotas = () => {
    loadNotas(); // Volver a cargar las notas al modificar una
  };
  return (
    <div>
      <h1>GESTIÓN DE NOTAS</h1>
      <ListadoNotas notas={notas} onNotasChange={cambioNotas} />
    </div>
  );
}

export default App;
