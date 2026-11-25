import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import TablaUsuarios from './usuarios/TablaUsuarios.jsx';
import ActualizarUsuario from './usuarios/ActualizarUsuario.jsx';
import TablaAutores from './autores/TablaAutores.jsx';
import ActualizarAutor from './autores/ActualizarAutor.jsx';
import TablaCategorias from './categorias/TablaCategorias.jsx';
import ActualizarCategoria from './categorias/ActualizarCategoria.jsx';
import TablaLibros from './libros/TablaLibros.jsx';
import ActualizarLibro from './libros/ActualizarLibro.jsx';
import TablaPrestamos from './prestamos/TablaPrestamos.jsx';
import ActualizarPrestamo from './prestamos/ActualizarPrestamo.jsx';

const modulos = [
  { ruta: '/libros', nombre: 'Libros' },
  { ruta: '/prestamos', nombre: 'Préstamos' },
  { ruta: '/usuarios', nombre: 'Usuarios' },
  { ruta: '/autores', nombre: 'Autores' },
  { ruta: '/categorias', nombre: 'Categorías' }
];

export default function App() {
  return (
    <div className="layout">
      <aside className="lomo">
        <h1 className="marca">Biblioteca</h1>
        <nav>
          {modulos.map((m) => (
            <NavLink key={m.ruta} to={m.ruta} className={({ isActive }) => (isActive ? 'enlace activo' : 'enlace')}>
              {m.nombre}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/libros" replace />} />
          <Route path="/usuarios" element={<TablaUsuarios />} />
          <Route path="/usuarios/editar/:id" element={<ActualizarUsuario />} />
          <Route path="/autores" element={<TablaAutores />} />
          <Route path="/autores/editar/:id" element={<ActualizarAutor />} />
          <Route path="/categorias" element={<TablaCategorias />} />
          <Route path="/categorias/editar/:id" element={<ActualizarCategoria />} />
          <Route path="/libros" element={<TablaLibros />} />
          <Route path="/libros/editar/:id" element={<ActualizarLibro />} />
          <Route path="/prestamos" element={<TablaPrestamos />} />
          <Route path="/prestamos/editar/:id" element={<ActualizarPrestamo />} />
          <Route path="*" element={<p>Página no encontrada.</p>} />
        </Routes>
      </main>
    </div>
  );
}
