import { useState } from "react";

const vacio = { proCodigo: "", proNombre: "", proPrecio: "", proCategoria: "" };

// Sirve para crear y para editar. El padre usa `key` para reiniciar el estado
// cuando cambia el producto que se edita.
export default function ProductoForm({ producto, onGuardar, onCancelar }) {
  const editando = Boolean(producto);
  const [datos, setDatos] = useState(
    producto
      ? {
          proCodigo: producto.proCodigo,
          proNombre: producto.proNombre,
          proPrecio: String(producto.proPrecio),
          proCategoria: producto.proCategoria,
        }
      : vacio
  );
  const [enviando, setEnviando] = useState(false);

  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

  async function enviar(e) {
    e.preventDefault();
    setEnviando(true);
    const guardado = await onGuardar({
      proCodigo: datos.proCodigo.trim(),
      proNombre: datos.proNombre.trim(),
      proPrecio: Number(datos.proPrecio),
      proCategoria: datos.proCategoria.trim(),
    });
    setEnviando(false);
    if (guardado && !editando) setDatos(vacio);
  }

  return (
    <form className="panel formulario" onSubmit={enviar}>
      <h2>{editando ? "Editar producto" : "Agregar producto"}</h2>

      <label>
        Código
        <input name="proCodigo" value={datos.proCodigo} onChange={cambiar}
          maxLength={30} required placeholder="CL123" />
      </label>
      <label>
        Nombre
        <input name="proNombre" value={datos.proNombre} onChange={cambiar}
          maxLength={100} required placeholder="Tennis" />
      </label>
      <label>
        Precio (COP)
        <input name="proPrecio" type="number" min="0" step="any"
          value={datos.proPrecio} onChange={cambiar} required placeholder="28000" />
      </label>
      <label>
        Categoría
        <input name="proCategoria" value={datos.proCategoria} onChange={cambiar}
          maxLength={50} required placeholder="Calzado" />
      </label>

      <div className="acciones">
        <button type="submit" className="primario" disabled={enviando}>
          {editando ? "Guardar cambios" : "Agregar producto"}
        </button>
        {editando && (
          <button type="button" className="secundario" onClick={onCancelar}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
