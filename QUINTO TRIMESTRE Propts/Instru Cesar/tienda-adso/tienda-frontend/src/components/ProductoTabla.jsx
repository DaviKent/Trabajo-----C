import { formatearPrecio } from "../formato.js";

export default function ProductoTabla({ productos, onEditar, onEliminar }) {
  if (productos.length === 0) {
    return (
      <p className="vacio">
        Aún no hay productos. Agrega el primero con el formulario.
      </p>
    );
  }

  return (
    <div className="tabla-scroll">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th className="num">Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.idProducto}>
              <td>{p.idProducto}</td>
              <td><span className="etiqueta">{p.proCodigo}</span></td>
              <td>{p.proNombre}</td>
              <td>{p.proCategoria}</td>
              <td className="num">{formatearPrecio(p.proPrecio)}</td>
              <td className="celda-acciones">
                <button className="secundario" onClick={() => onEditar(p)}>Editar</button>
                <button className="peligro" onClick={() => onEliminar(p)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
