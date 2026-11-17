import { useEffect, useState } from "react";

const API = "http://127.0.0.1:1450/apiUser/usuarios";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const traerUsuarios = async () => {
    try {
      const respuesta = await fetch(API);
      const data = await respuesta.json();
      if (Array.isArray(data)) setUsuarios(data);
      else alert(data.mensaje);
    } catch (error) {
      alert("No se pudo conectar con el servidor");
    }
  };

  useEffect(() => {
    traerUsuarios();
  }, []);

  const guardar = async () => {
    if (!nombre.trim() || !apellido.trim()) {
      alert("Nombre y apellido son obligatorios");
      return;
    }
    try {
      const respuesta = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido, direccion, telefono }),
      });
      const data = await respuesta.json();
      alert(data.mensaje);
      setNombre(""); setApellido(""); setDireccion(""); setTelefono("");
      traerUsuarios();
    } catch (error) {
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <div className="formulario">
        <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <input placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        <input placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <button onClick={guardar}>Guardar usuario</button>
      </div>

      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Dirección</th><th>Teléfono</th></tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td><td>{u.nombre}</td><td>{u.apellido}</td>
              <td>{u.direccion}</td><td>{u.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
