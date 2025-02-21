import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { getAllNotas } from "../notasServer";
const ListadoNotas = () => {
  const { notas, setNotas } = useContext(AppContext);

  useEffect(() => {
    const cargaNotas = () => {
      async () => {
        const notas = await getAllNotas();
        setNotas(notas);
        console.log(notas);
      };
    };
    cargaNotas();
  }, [setNotas]);
  return (
    <>
      <ul className="space-y-2">
        {notas.length > 0 ? (
          notas.map((nota) => (
            <li key={nota.id} className="p-2 border rounded-xl shadow-sm">
              {nota.texto} - {nota.importancia}
            </li>
          ))
        ) : (
          <p>No hay notas disponibles.</p>
        )}
      </ul>
    </>
  );
};
export default ListadoNotas;
