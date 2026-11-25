import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

const vacio = { nombre: '', correo: '', telefono: '', estado: 'activo' };

export default function TablaUsuarios() {
  const location = useLocation();
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState(vacio);
  const [mensaje, setMensaje] = useState(location.state?.mensaje || null);

  // GET: consultar al montar el componente
  const cargar = async () => {
    try {
      const respuesta = await fetch(`${API}/usuarios`);
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setUsuarios(datos);
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message === 'Failed to fetch' ? 'No se pudo conectar con el servidor' : error.message });
    }
  };
  useEffect(() => { cargar(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // POST: registrar
  const registrar = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API}/usuarios`, {
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

  // DELETE: eliminar
  const eliminar = async (id) => {
    if (!window.confirm('¿Eliminar este usuario?')) return;
    try {
      const respuesta = await fetch(`${API}/usuarios/${id}`, { method: 'DELETE' });
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
      <h2>Usuarios</h2>
      <Mensaje mensaje={mensaje} />

      <form className="tarjeta formulario" onSubmit={registrar}>
        <h3>Registrar usuario</h3>
        <label>Nombre
          <input name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>Correo
          <input type="email" name="correo" value={form.correo} onChange={handleChange} />
        </label>
        <label>Teléfono
          <input name="telefono" value={form.telefono} onChange={handleChange} />
        </label>
        <label>Estado
          <select name="estado" value={form.estado} onChange={handleChange}>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </label>
        <button type="submit" className="btn primario">Registrar usuario</button>
      </form>

      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>ID</th><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>Estado</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td><td>{u.nombre}</td><td>{u.correo}</td><td>{u.telefono}</td>
                <td><span className={`etiqueta ${u.estado}`}>{u.estado}</span></td>
                <td className="acciones">
                  <Link className="btn" to={`/usuarios/editar/${u.id}`}>Editar</Link>
                  <button className="btn peligro" onClick={() => eliminar(u.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {usuarios.length === 0 && <tr><td colSpan="6" className="vacio">Aún no hay usuarios. Registra el primero con el formulario.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
