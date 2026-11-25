import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

const vacio = { titulo: '', isbn: '', anio_publicacion: '', cantidad: '', autor_id: '', categoria_id: '' };

export default function TablaLibros() {
  const location = useLocation();
  const [libros, setLibros] = useState([]);
  const [autores, setAutores] = useState([]);       // para el select de autor
  const [categorias, setCategorias] = useState([]); // para el select de categoría
  const [form, setForm] = useState(vacio);
  const [mensaje, setMensaje] = useState(location.state?.mensaje || null);

  const cargarLibros = async () => {
    try {
      const respuesta = await fetch(`${API}/libros`);
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setLibros(datos);
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message === 'Failed to fetch' ? 'No se pudo conectar con el servidor' : error.message });
    }
  };

  // Al montar: libros + datos de las listas desplegables
  useEffect(() => {
    cargarLibros();
    const cargarListas = async () => {
      try {
        const [ra, rc] = await Promise.all([fetch(`${API}/autores`), fetch(`${API}/categorias`)]);
        setAutores(await ra.json());
        setCategorias(await rc.json());
      } catch (error) {
        setMensaje({ tipo: 'error', texto: 'No se pudieron cargar autores y categorías' });
      }
    };
    cargarListas();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const registrar = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API}/libros`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setMensaje({ tipo: 'ok', texto: datos.mensaje });
      setForm(vacio);
      cargarLibros();
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  const eliminar = async (id) => {
    if (!window.confirm('¿Eliminar este libro?')) return;
    try {
      const respuesta = await fetch(`${API}/libros/${id}`, { method: 'DELETE' });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      setMensaje({ tipo: 'ok', texto: datos.mensaje });
      cargarLibros();
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  return (
    <section>
      <h2>Libros</h2>
      <Mensaje mensaje={mensaje} />

      <form className="tarjeta formulario" onSubmit={registrar}>
        <h3>Registrar libro</h3>
        <label>Título
          <input name="titulo" value={form.titulo} onChange={handleChange} required />
        </label>
        <label>ISBN
          <input name="isbn" value={form.isbn} onChange={handleChange} />
        </label>
        <label>Año de publicación
          <input type="number" name="anio_publicacion" value={form.anio_publicacion} onChange={handleChange} />
        </label>
        <label>Cantidad
          <input type="number" min="0" name="cantidad" value={form.cantidad} onChange={handleChange} />
        </label>
        <label>Autor
          <select name="autor_id" value={form.autor_id} onChange={handleChange} required>
            <option value="">Selecciona un autor</option>
            {autores.map((a) => <option key={a.id} value={a.id}>{a.nombre}</option>)}
          </select>
        </label>
        <label>Categoría
          <select name="categoria_id" value={form.categoria_id} onChange={handleChange} required>
            <option value="">Selecciona una categoría</option>
            {categorias.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
          </select>
        </label>
        <button type="submit" className="btn primario">Registrar libro</button>
      </form>

      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>ID</th><th>Título</th><th>ISBN</th><th>Año</th><th>Cantidad</th><th>Autor</th><th>Categoría</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {libros.map((l) => (
              <tr key={l.id}>
                <td>{l.id}</td><td>{l.titulo}</td><td>{l.isbn}</td><td>{l.anio_publicacion}</td>
                <td>{l.cantidad}</td><td>{l.autor}</td><td>{l.categoria}</td>
                <td className="acciones">
                  <Link className="btn" to={`/libros/editar/${l.id}`}>Editar</Link>
                  <button className="btn peligro" onClick={() => eliminar(l.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {libros.length === 0 && <tr><td colSpan="8" className="vacio">Aún no hay libros. Registra autores y categorías, y luego el primer libro.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
