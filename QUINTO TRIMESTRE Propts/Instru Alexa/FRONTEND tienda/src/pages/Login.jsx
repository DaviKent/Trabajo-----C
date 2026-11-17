import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const ingresar = () => {
    if (!correo.trim() || !clave.trim()) {
      setError("Escribe tu correo y contraseña");
      return;
    }
    // Login simulado (sin backend de usuarios)
    localStorage.setItem("sesion", correo);
    navigate("/dashboard");
  };

  return (
    <div className="pagina">
      <h1>Iniciar sesión</h1>
      <div className="formulario">
        <input placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={clave} onChange={(e) => setClave(e.target.value)} />
        <button onClick={ingresar}>Entrar</button>
        {error && <span className="error">{error}</span>}
      </div>
      <p>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></p>
    </div>
  );
}
