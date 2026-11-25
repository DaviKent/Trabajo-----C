import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API, hoy } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

const vacio = () => ({ usuario_id: '', libro_id: '', fecha_prestamo: hoy(), fecha_devolucion: '', estado: 'activo' });

export default function TablaPrestamos() {
  const location = useLocation();
  const [prestamos, setPrestamos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);   // para el select de usuario
  const [libros, setLibros] = useState([]);       // para el select de libro
  const [form, setForm] = useState(vacio());
  const [mensaje, setMensaje] = useState(location.state?.mensaje || null);

  const cargarPrestamos = async () => {
    try {
      const respuesta = await fetch(`${API}/prestamos`);
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setPrestamos(datos);
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message === 'Failed to fetch' ? 'No se pudo conectar con el servidor' : error.message });
    }
  };

  useEffect(() => {
    cargarPrestamos();
    const cargarListas = async () => {
      try {
        const [ru, rl] = await Promise.all([fetch(`${API}/usuarios`), fetch(`${API}/libros`)]);
        setUsuarios(await ru.json());
        setLibros(await rl.json());
      } catch (error) {
        setMensaje({ tipo: 'error', texto: 'No se pudieron cargar usuarios y libros' });
      }
    };
    cargarListas();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const registrar = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API}/prestamos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setMensaje({ tipo: 'ok', texto: datos.mensaje });
      setForm(vacio());
      cargarPrestamos();
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  const eliminar = async (id) => {
    if (!window.confirm('¿Eliminar este préstamo?')) return;
    try {
      const respuesta = await fetch(`${API}/prestamos/${id}`, { method: 'DELETE' });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setMensaje({ tipo: 'ok', texto: datos.mensaje });
      cargarPrestamos();
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  return (
    <section>
      <h2>Préstamos</h2>
      <Mensaje mensaje={mensaje} />

      <form className="tarjeta formulario" onSubmit={registrar}>
        <h3>Registrar préstamo</h3>
        <label>Usuario
          <select name="usuario_id" value={form.usuario_id} onChange={handleChange} required>
            <option value="">Selecciona un usuario</option>
            {usuarios.map((u) => <option key={u.id} value={u.id}>{u.nombre}</option>)}
          </select>
        </label>
        <label>Libro
          <select name="libro_id" value={form.libro_id} onChange={handleChange} required>
            <option value="">Selecciona un libro</option>
            {libros.map((l) => <option key={l.id} value={l.id}>{l.titulo}</option>)}
          </select>
        </label>
        <label>Fecha de préstamo
          <input type="date" name="fecha_prestamo" value={form.fecha_prestamo} onChange={handleChange} required />
        </label>
        <label>Fecha de devolución
          <input type="date" name="fecha_devolucion" value={form.fecha_devolucion} onChange={handleChange} />
        </label>
        <label>Estado
          <select name="estado" value={form.estado} onChange={handleChange}>
            <option value="activo">Activo</option>
            <option value="devuelto">Devuelto</option>
            <option value="vencido">Vencido</option>
          </select>
        </label>
        <button type="submit" className="btn primario">Registrar préstamo</button>
      </form>

      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>ID</th><th>Usuario</th><th>Libro</th><th>Fecha de préstamo</th><th>Fecha de devolución</th><th>Estado</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {prestamos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td><td>{p.usuario}</td><td>{p.libro}</td>
                <td>{p.fecha_prestamo}</td><td>{p.fecha_devolucion}</td>
                <td><span className={`etiqueta ${p.estado}`}>{p.estado}</span></td>
                <td className="acciones">
                  <Link className="btn" to={`/prestamos/editar/${p.id}`}>Editar</Link>
                  <button className="btn peligro" onClick={() => eliminar(p.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {prestamos.length === 0 && <tr><td colSpan="7" className="vacio">Aún no hay préstamos registrados.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
