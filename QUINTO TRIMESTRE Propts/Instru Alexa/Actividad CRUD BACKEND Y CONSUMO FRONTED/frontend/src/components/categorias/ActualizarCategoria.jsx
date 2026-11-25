import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { API, limpiarNulos } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

export default function ActualizarCategoria() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', descripcion: '' });
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        const respuesta = await fetch(`${API}/categorias/${id}`);
        const datos = await respuesta.json();
        if (!respuesta.ok) throw new Error(datos.mensaje);
        setForm(limpiarNulos(datos));
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
      const respuesta = await fetch(`${API}/categorias/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      navigate('/categorias', { state: { mensaje: { tipo: 'ok', texto: datos.mensaje } } });
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  return (
    <section>
      <h2>Editar categoría</h2>
      <Mensaje mensaje={mensaje} />
      <form className="tarjeta formulario" onSubmit={actualizar}>
        <label>Nombre
          <input name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>Descripción
          <input name="descripcion" value={form.descripcion} onChange={handleChange} />
        </label>
        <div className="acciones">
          <button type="submit" className="btn primario">Guardar cambios</button>
          <Link className="btn" to="/categorias">Cancelar</Link>
        </div>
      </form>
    </section>
  );
}
