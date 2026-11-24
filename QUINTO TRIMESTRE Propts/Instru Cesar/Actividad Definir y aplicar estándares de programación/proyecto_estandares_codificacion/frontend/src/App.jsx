import React, { useEffect, useState } from "react";
import UsuarioForm from "./components/UsuarioForm";
import UsuarioList from "./components/UsuarioList";
import {
  consultarUsuarios,
  guardarUsuario,
  eliminarUsuario
} from "./services/usuarioService";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function cargarUsuarios() {
    try {
      const datosUsuarios = await consultarUsuarios();
      setUsuarios(datosUsuarios);
    } catch (error) {
      setMensaje("No fue posible consultar los usuarios.");
    }
  }

  useEffect(() => {
    cargarUsuarios();
  }, []);

  async function registrarUsuario(evento) {
    evento.preventDefault();

    try {
      const respuesta = await guardarUsuario({ nombre, correo });
      setMensaje(respuesta.mensaje);
      setNombre("");
      setCorreo("");
      cargarUsuarios();
    } catch (error) {
      setMensaje(error.message);
    }
  }

  async function borrarUsuario(idUsuario) {
    try {
      const respuesta = await eliminarUsuario(idUsuario);
      setMensaje(respuesta.mensaje);
      cargarUsuarios();
    } catch (error) {
      setMensaje(error.message);
    }
  }

  return (
    <main className="contenedor">
      <h1>Gestión de usuarios</h1>
      <p className="descripcion">
        Proyecto de aplicación de estándares de codificación
      </p>

      <section className="panel">
        <h2>Registrar usuario</h2>
        <UsuarioForm
          nombre={nombre}
          correo={correo}
          setNombre={setNombre}
          setCorreo={setCorreo}
          guardar={registrarUsuario}
        />
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>

      <section className="panel">
        <UsuarioList usuarios={usuarios} eliminar={borrarUsuario} />
      </section>
    </main>
  );
}

export default App;
