import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("sesion");
    navigate("/");
  };

  return (
    <div className="pagina">
      <h1>Panel de la tienda</h1>
      <nav>
        <Link to="/productos"> Ir a Productos</Link>
        <Link to="/contacto"> Contacto</Link>
      </nav>
      <p><button className="peligro" onClick={cerrarSesion}>Cerrar sesión</button></p>
    </div>
  );
}
