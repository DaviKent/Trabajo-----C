import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { API, limpiarNulos } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

export default function ActualizarPrestamo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ usuario_id: '', libro_id: '', fecha_prestamo: '', fecha_devolucion: '', estado: 'activo' });
  const [usuarios, setUsuarios] = useState([]);
  const [libros, setLibros] = useState([]);
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        const [rp, ru, rl] = await Promise.all([
          fetch(`${API}/prestamos/${id}`),
          fetch(`${API}/usuarios`),
          fetch(`${API}/libros`)
        ]);
        const prestamo = await rp.json();
        if (!rp.ok) throw new Error(prestamo.mensaje);
        setForm(limpiarNulos(prestamo));
        setUsuarios(await ru.json());
        setLibros(await rl.json());
      } catch (error) {
        setMensaje({ tipo: 'error', texto: error.message });
      }
    };
    cargar();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const actualizar = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API}/prestamos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      navigate('/prestamos', { state: { mensaje: { tipo: 'ok', texto: datos.mensaje } } });
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  return (
    <section>
      <h2>Editar préstamo</h2>
      <Mensaje mensaje={mensaje} />
      <form className="tarjeta formulario" onSubmit={actualizar}>
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
        <div className="acciones">
          <button type="submit" className="btn primario">Guardar cambios</button>
          <Link className="btn" to="/prestamos">Cancelar</Link>
        </div>
      </form>
    </section>
  );
}
