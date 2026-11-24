const API_URL = "http://127.0.0.1:5000/api/usuarios";

export async function consultarUsuarios() {
  const respuesta = await fetch(API_URL);
  return await respuesta.json();
}

export async function guardarUsuario(datosUsuario) {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datosUsuario)
  });

  const datosRespuesta = await respuesta.json();

  if (!respuesta.ok) {
    throw new Error(datosRespuesta.mensaje);
  }

  return datosRespuesta;
}

export async function eliminarUsuario(idUsuario) {
  const respuesta = await fetch(API_URL + "/" + idUsuario, {
    method: "DELETE"
  });

  const datosRespuesta = await respuesta.json();

  if (!respuesta.ok) {
    throw new Error(datosRespuesta.mensaje);
  }

  return datosRespuesta;
}
