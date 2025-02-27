const url = "http://localhost:8000/notas.php";
// Obtención de todas las notas
export const getAllNotas = async () => {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error("Error al cargar las notas");
    return await respuesta.json();
  } catch (error) {
    console.error("Error al cargar las notas:", error);
    return [];
  }
};
// Obtención de una nota por ID
export const getNotaById = async (idNota) => {
  let mensajeError = `Error al obtener una nota la nota con id ${idNota}`;
  try {
    const respuesta = await fetch(`${url}?id=${idNota}`);
    if (!respuesta.ok) throw new mensajeError();
    return await respuesta.json();
  } catch (error) {
    console.error(mensajeError, error);
    return null;
  }
};

// Añadir nueva nota
export const addNota = async (nuevaNota) => {
  const initObject = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(nuevaNota),
  };
  const mensajeError = "Error al añadir la nota";
  try {
    const respuesta = await fetch(url, initObject);
    console.log(JSON.stringify(nuevaNota));
    if (!respuesta.ok) throw new Error(mensajeError);
    return await respuesta.json();
  } catch (error) {
    console.error(mensajeError, error);
    return null;
  }
};

// Actualizar una nota existente
export const updateNota = async (notaActualizada) => {
  const initObject = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(notaActualizada),
  };
  const mensajeError = "Error al actualizar la nota";
  try {
    const respuesta = await fetch(
      `${url}?id=${notaActualizada.id}`,
      initObject
    );
    if (!respuesta.ok) throw new Error(mensajeError);
    return await respuesta.json();
  } catch (error) {
    console.error(mensajeError, error);
    return null;
  }
};

// Borrado de nota existente
export const deleteNota = async (idNota) => {
  const initObject = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({ id: idNota }),
  };
  const mensajeError = "Error al eliminar la nota";

  try {
    const respuesta = await fetch(url, initObject);
    if (!respuesta.ok) throw new Error(mensajeError);
    return true;
  } catch (error) {
    console.error(mensajeError, error);
    return false;
  }
};
