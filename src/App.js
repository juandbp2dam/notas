import logo from "./logo.svg";
import "./App.css";
import {
  addNota,
  deleteNota,
  getAllNotas,
  getNotaById,
  updateNota,
} from "./notasServer";
import { useEffect } from "react";
import ListadoNotas from "./components/ListadoNotas";
import { AppContext } from "./AppContext";
function App() {
  /*   useEffect(() => {
    const obtenerNota = async (id) => {
      const notas = await getNotaById(id);
      console.log(notas);
    };
    obtenerNota(2);
  }, []); */

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={notas}>
          <ListadoNotas />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
