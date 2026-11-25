import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

const vacio = { nombre: '', descripcion: '' };

export default function TablaCategorias() {
  const location = useLocation();
  const [categorias, setCategorias] = useState([]);
  const [form, setForm] = useState(vacio);
  const [mensaje, setMensaje] = useState(location.state?.mensaje || null);

  const cargar = async () => {
    try {
      const respuesta = await fetch(`${API}/categorias`);
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setCategorias(datos);
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message === 'Failed to fetch' ? 'No se pudo conectar con el servidor' : error.message });
    }
  };
  useEffect(() => { cargar(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const registrar = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API}/categorias`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setMensaje({ tipo: 'ok', texto: datos.mensaje });
      setForm(vacio);
      cargar();
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  const eliminar = async (id) => {
    if (!window.confirm('¿Eliminar esta categoría?')) return;
    try {
      const respuesta = await fetch(`${API}/categorias/${id}`, { method: 'DELETE' });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setMensaje({ tipo: 'ok', texto: datos.mensaje });
      cargar();
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  return (
    <section>
      <h2>Categorías</h2>
      <Mensaje mensaje={mensaje} />

      <form className="tarjeta formulario" onSubmit={registrar}>
        <h3>Registrar categoría</h3>
        <label>Nombre
          <input name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>Descripción
          <input name="descripcion" value={form.descripcion} onChange={handleChange} />
        </label>
        <button type="submit" className="btn primario">Registrar categoría</button>
      </form>

      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>ID</th><th>Nombre</th><th>Descripción</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {categorias.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td><td>{c.nombre}</td><td>{c.descripcion}</td>
                <td className="acciones">
                  <Link className="btn" to={`/categorias/editar/${c.id}`}>Editar</Link>
                  <button className="btn peligro" onClick={() => eliminar(c.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {categorias.length === 0 && <tr><td colSpan="4" className="vacio">Aún no hay categorías. Registra la primera con el formulario.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
