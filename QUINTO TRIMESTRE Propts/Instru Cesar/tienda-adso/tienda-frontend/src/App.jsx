import { useCallback, useEffect, useState } from "react";
import ProductoForm from "./components/ProductoForm.jsx";
import ProductoTabla from "./components/ProductoTabla.jsx";
import BuscarPorId from "./components/BuscarPorId.jsx";
import * as api from "./services/productoService.js";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [editando, setEditando] = useState(null);
  const [aviso, setAviso] = useState(null); // { tipo: "ok" | "error", texto }

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      setProductos(await api.obtenerProductos());
    } catch (e) {
      setAviso({ tipo: "error", texto: e.message });
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => { cargar(); }, [cargar]);

  // El aviso desaparece solo a los 5 segundos
  useEffect(() => {
    if (!aviso) return;
    const temporizador = setTimeout(() => setAviso(null), 5000);
    return () => clearTimeout(temporizador);
  }, [aviso]);

  async function guardar(datos) {
    try {
      if (editando) {
        await api.actualizarProducto(editando.idProducto, datos);
        setAviso({ tipo: "ok", texto: "Producto actualizado" });
        setEditando(null);
      } else {
        await api.crearProducto(datos);
        setAviso({ tipo: "ok", texto: "Producto agregado" });
      }
      await cargar();
      return true;
    } catch (e) {
      setAviso({ tipo: "error", texto: e.message });
      return false;
    }
  }

  async function eliminar(producto) {
    if (!window.confirm(`¿Eliminar "${producto.proNombre}"? Esta acción no se puede deshacer.`)) return;
    try {
      await api.eliminarProducto(producto.idProducto);
      if (editando?.idProducto === producto.idProducto) setEditando(null);
      setAviso({ tipo: "ok", texto: "Producto eliminado" });
      await cargar();
    } catch (e) {
      setAviso({ tipo: "error", texto: e.message });
    }
  }

  return (
    <div className="pagina">
      <header className="cabecera">
        <h1>Catálogo de productos</h1>
        <p className="conteo">
          {cargando ? "Cargando inventario…" : `${productos.length} producto${productos.length === 1 ? "" : "s"} en inventario`}
        </p>
      </header>

      {aviso && (
        <div className={`aviso ${aviso.tipo}`} role={aviso.tipo === "error" ? "alert" : "status"}>
          {aviso.texto}
          <button onClick={() => setAviso(null)} aria-label="Cerrar aviso">×</button>
        </div>
      )}

      <main className="contenido">
        <aside className="lateral">
          <ProductoForm
            key={editando ? editando.idProducto : "nuevo"}
            producto={editando}
            onGuardar={guardar}
            onCancelar={() => setEditando(null)}
          />
        </aside>

        <div className="principal">
          <BuscarPorId />
          <section className="panel">
            <h2>Inventario</h2>
            <ProductoTabla
              productos={productos}
              onEditar={(p) => { setEditando(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              onEliminar={eliminar}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
