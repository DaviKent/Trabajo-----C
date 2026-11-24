import React from "react";

function UsuarioForm({ nombre, correo, setNombre, setCorreo, guardar }) {
  return (
    <form onSubmit={guardar} className="formulario">
      <label>Nombre</label>
      <input
        type="text"
        value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
        placeholder="Escriba el nombre"
        required
      />

      <label>Correo</label>
      <input
        type="email"
        value={correo}
        onChange={(evento) => setCorreo(evento.target.value)}
        placeholder="Escriba el correo"
        required
      />

      <button type="submit">Registrar usuario</button>
    </form>
  );
}

export default UsuarioForm;
