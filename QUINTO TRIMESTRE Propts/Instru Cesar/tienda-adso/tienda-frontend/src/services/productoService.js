// Capa de acceso a datos: aquí vive todo el contacto con la API Flask.
const API_URL =
  import.meta.env.VITE_API_URL ?? "http://127.0.0.1:5000/api/v1/productos";

async function peticion(ruta = "", opciones = {}) {
  let respuesta;
  try {
    respuesta = await fetch(`${API_URL}${ruta}`, {
      headers: { "Content-Type": "application/json" },
      ...opciones,
    });
  } catch {
    throw new Error(
      "No se pudo conectar con la API. Verifica que Flask esté corriendo en el puerto 5000."
    );
  }

  const datos = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok) {
    throw new Error(datos.mensaje || `Error ${respuesta.status}`);
  }
  return datos;
}

// GET /productos
export async function obtenerProductos() {
  const datos = await peticion();
  return datos.Productos;
}

// GET /productos/:id
export async function obtenerProductoPorId(id) {
  const datos = await peticion(`/${id}`);
  return datos.Producto;
}

// POST /productos
export async function crearProducto(producto) {
  const datos = await peticion("", {
    method: "POST",
    body: JSON.stringify(producto),
  });
  return datos.Producto;
}

// PUT /productos/:id
export async function actualizarProducto(id, producto) {
  const datos = await peticion(`/${id}`, {
    method: "PUT",
    body: JSON.stringify(producto),
  });
  return datos.Producto;
}

// DELETE /productos/:id
export async function eliminarProducto(id) {
  await peticion(`/${id}`, { method: "DELETE" });
}
