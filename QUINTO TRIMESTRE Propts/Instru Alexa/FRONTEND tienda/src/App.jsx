import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Registro from "./pages/Registro.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Productos from "./pages/Productos.jsx";
import Contacto from "./pages/Contacto.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
