import { useState } from "react";

export default function Prueba() {
  const [mensaje, setMensaje] = useState("");

  const probar = async () => {
    try {
      const respuesta = await fetch("http://127.0.0.1:1450/api/prueba");
      const data = await respuesta.json();
      setMensaje(data.mensaje);
    } catch (error) {
      setMensaje("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <h1>Prueba de conexión</h1>
      <button onClick={probar}>Probar API</button>
      <p>{mensaje}</p>
    </div>
  );
}
