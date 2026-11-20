import { useState } from "react";
import { obtenerProductoPorId } from "../services/productoService.js";
import { formatearPrecio } from "../formato.js";

export default function BuscarPorId() {
  const [id, setId] = useState("");
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState("");

  async function buscar(e) {
    e.preventDefault();
    setError("");
    setProducto(null);
    try {
      setProducto(await obtenerProductoPorId(id));
    } catch (err) {
      setError(err.message);
    }
  }

  function limpiar() {
    setId("");
    setProducto(null);
    setError("");
  }

  return (
    <section className="panel buscador">
      <h2>Consultar por ID</h2>
      <form onSubmit={buscar} className="fila-busqueda">
        <input type="number" min="1" value={id} required
          onChange={(e) => setId(e.target.value)} placeholder="ID del producto"
          aria-label="ID del producto" />
        <button type="submit" className="primario">Buscar producto</button>
        {(producto || error) && (
          <button type="button" className="secundario" onClick={limpiar}>Limpiar</button>
        )}
      </form>

      {error && <p className="error-inline">{error}</p>}
      {producto && (
        <dl className="resultado">
          <div><dt>Código</dt><dd><span className="etiqueta">{producto.proCodigo}</span></dd></div>
          <div><dt>Nombre</dt><dd>{producto.proNombre}</dd></div>
          <div><dt>Categoría</dt><dd>{producto.proCategoria}</dd></div>
          <div><dt>Precio</dt><dd>{formatearPrecio(producto.proPrecio)}</dd></div>
        </dl>
      )}
    </section>
  );
}
