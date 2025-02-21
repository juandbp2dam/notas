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
function App() {
  useEffect(() => {
    const obtenerNota = async (id) => {
      const notas = await getNotaById(id);
      console.log(notas);
    };
    obtenerNota(2);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
