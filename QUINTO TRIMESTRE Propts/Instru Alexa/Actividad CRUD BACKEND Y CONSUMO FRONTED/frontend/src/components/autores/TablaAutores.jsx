import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

const vacio = { nombre: '', nacionalidad: '', fecha_nacimiento: '' };

export default function TablaAutores() {
  const location = useLocation();
  const [autores, setAutores] = useState([]);
  const [form, setForm] = useState(vacio);
  const [mensaje, setMensaje] = useState(location.state?.mensaje || null);

  const cargar = async () => {
    try {
      const respuesta = await fetch(`${API}/autores`);
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setAutores(datos);
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message === 'Failed to fetch' ? 'No se pudo conectar con el servidor' : error.message });
    }
  };
  useEffect(() => { cargar(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const registrar = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API}/autores`, {
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
    if (!window.confirm('¿Eliminar este autor?')) return;
    try {
      const respuesta = await fetch(`${API}/autores/${id}`, { method: 'DELETE' });
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
      <h2>Autores</h2>
      <Mensaje mensaje={mensaje} />

      <form className="tarjeta formulario" onSubmit={registrar}>
        <h3>Registrar autor</h3>
        <label>Nombre
          <input name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>Nacionalidad
          <input name="nacionalidad" value={form.nacionalidad} onChange={handleChange} />
        </label>
        <label>Fecha de nacimiento
          <input type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={handleChange} />
        </label>
        <button type="submit" className="btn primario">Registrar autor</button>
      </form>

      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>ID</th><th>Nombre</th><th>Nacionalidad</th><th>Fecha de nacimiento</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {autores.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td><td>{a.nombre}</td><td>{a.nacionalidad}</td><td>{a.fecha_nacimiento}</td>
                <td className="acciones">
                  <Link className="btn" to={`/autores/editar/${a.id}`}>Editar</Link>
                  <button className="btn peligro" onClick={() => eliminar(a.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {autores.length === 0 && <tr><td colSpan="5" className="vacio">Aún no hay autores. Registra el primero con el formulario.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
