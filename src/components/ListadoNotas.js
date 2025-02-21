import "./ListadoNotas.css";
const ListadoNotas = ({ notas }) => {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>ID</th>
          <th>Texto</th>
          <th>Importancia</th>
        </tr>
      </thead>
      <tbody>
        {notas?.map((nota) => (
          <tr key={nota.id} className="fila">
            <td className="celda-id">{nota.id}</td>
            <td className="celda-texto">{nota.texto}</td>
            <td className="celda-importancia">{nota.importancia}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ListadoNotas;
