import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { API, limpiarNulos } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

export default function ActualizarLibro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: '', isbn: '', anio_publicacion: '', cantidad: '', autor_id: '', categoria_id: '' });
  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        const [rl, ra, rc] = await Promise.all([
          fetch(`${API}/libros/${id}`),
          fetch(`${API}/autores`),
          fetch(`${API}/categorias`)
        ]);
        const libro = await rl.json();
        if (!rl.ok) throw new Error(libro.mensaje);
        setForm(limpiarNulos(libro));
        setAutores(await ra.json());
        setCategorias(await rc.json());
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
      const respuesta = await fetch(`${API}/libros/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      navigate('/libros', { state: { mensaje: { tipo: 'ok', texto: datos.mensaje } } });
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  return (
    <section>
      <h2>Editar libro</h2>
      <Mensaje mensaje={mensaje} />
      <form className="tarjeta formulario" onSubmit={actualizar}>
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
        <div className="acciones">
          <button type="submit" className="btn primario">Guardar cambios</button>
          <Link className="btn" to="/libros">Cancelar</Link>
        </div>
      </form>
    </section>
  );
}
