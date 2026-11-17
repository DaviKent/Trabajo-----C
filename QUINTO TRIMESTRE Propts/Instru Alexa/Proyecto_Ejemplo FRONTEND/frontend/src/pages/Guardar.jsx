import { useState } from "react";

export default function Guardar() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const enviar = async () => {
    try {
      const res = await fetch("http://127.0.0.1:1450/appiGuardar/guardar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, edad }),
      });
      const data = await res.json();
      setRespuesta(data.mensaje);
    } catch (error) {
      setRespuesta("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <h1>Guardar datos</h1>
      <div className="formulario">
        <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        <button onClick={enviar}>Enviar</button>
      </div>
      <p>{respuesta}</p>
    </div>
  );
}
