import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { API, limpiarNulos } from '../../api.js';
import Mensaje from '../Mensaje.jsx';

export default function ActualizarUsuario() {
  const { id } = useParams();          // id que viene en la URL
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', estado: 'activo' });
  const [mensaje, setMensaje] = useState(null);

  // Cargar el registro seleccionado
  useEffect(() => {
    const cargar = async () => {
      try {
        const respuesta = await fetch(`${API}/usuarios/${id}`);
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

  // PUT: actualizar
  const actualizar = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API}/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const datos = await respuesta.json();
      if (!respuesta.ok) throw new Error(datos.mensaje);
      navigate('/usuarios', { state: { mensaje: { tipo: 'ok', texto: datos.mensaje } } });
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    }
  };

  return (
    <section>
      <h2>Editar usuario</h2>
      <Mensaje mensaje={mensaje} />
      <form className="tarjeta formulario" onSubmit={actualizar}>
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
        <div className="acciones">
          <button type="submit" className="btn primario">Guardar cambios</button>
          <Link className="btn" to="/usuarios">Cancelar</Link>
        </div>
      </form>
    </section>
  );
}
