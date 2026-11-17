import { Routes, Route, Link } from "react-router-dom";
import Prueba from "./pages/Prueba.jsx";
import Guardar from "./pages/Guardar.jsx";
import Usuarios from "./pages/Usuarios.jsx";

export default function App() {
  return (
    <div className="pagina">
      <nav>
        <Link to="/">Prueba</Link>
        <Link to="/guardar">Guardar</Link>
        <Link to="/usuarios">Usuarios</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Prueba />} />
        <Route path="/guardar" element={<Guardar />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </div>
  );
}
