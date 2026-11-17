import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registro() {
  const [datos, setDatos] = useState({ nombre: "", correo: "", clave: "" });
  const navigate = useNavigate();

  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

  const registrar = () => {
    if (!datos.nombre.trim() || !datos.correo.trim() || !datos.clave.trim()) {
      alert("Completa todos los campos");
      return;
    }
    alert("Usuario registrado (simulado)");
    navigate("/");
  };

  return (
    <div className="pagina">
      <h1>Registrarse</h1>
      <div className="formulario">
        <input name="nombre" placeholder="Nombre completo" onChange={cambiar} />
        <input name="correo" placeholder="Correo" onChange={cambiar} />
        <input name="clave" type="password" placeholder="Contraseña" onChange={cambiar} />
        <button onClick={registrar}>Registrarse</button>
      </div>
      <Link to="/">Volver al login</Link>
    </div>
  );
}
