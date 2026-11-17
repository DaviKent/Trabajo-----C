import { Link } from "react-router-dom";

export default function Contacto() {
  return (
    <div className="pagina">
      <h1>Contacto de la tienda</h1>
      <p>Soporte y gestión de inventario.</p>
      <Link to="/dashboard">← Volver al panel</Link>
    </div>
  );
}
