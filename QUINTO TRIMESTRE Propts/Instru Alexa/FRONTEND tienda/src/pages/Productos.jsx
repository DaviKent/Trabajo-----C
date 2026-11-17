import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "http://127.0.0.1:1450/apiProductos/productos";
const vacio = { nombre: "", categoria: "", precio: "", cantidad: "" };

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState(vacio);

  const cargarProductos = async () => {
    try {
      const respuesta = await fetch(API);
      const data = await respuesta.json();
      if (!respuesta.ok) throw new Error(data.mensaje);
      setProductos(data);
    } catch (error) {
      alert("No se pudo cargar la lista: " + error.message);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const guardar = async () => {
    if (!form.nombre.trim() || form.precio === "" || form.cantidad === "") {
      alert("Nombre, precio y cantidad son obligatorios");
      return;
    }
    try {
      const respuesta = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await respuesta.json();
      if (!respuesta.ok) {
        alert("Error: " + data.mensaje);
        return;
      }
      alert(data.mensaje);
      setForm(vacio);
      cargarProductos();
    } catch (error) {
      alert("No se pudo conectar con la API");
    }
  };

  return (
    <div className="pagina">
      <h1>Gestión de productos</h1>
      <Link to="/dashboard">← Volver al panel</Link>
      <div className="formulario">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={cambiar} />
        <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={cambiar} />
        <input name="precio" placeholder="Precio" value={form.precio} onChange={cambiar} />
        <input name="cantidad" placeholder="Cantidad" value={form.cantidad} onChange={cambiar} />
        <button onClick={guardar}>Guardar producto</button>
      </div>

      <h3>Lista de productos en MySQL</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Cantidad</th></tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.nombre}</td><td>{p.categoria}</td>
              <td>${Number(p.precio).toFixed(2)}</td><td>{p.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
