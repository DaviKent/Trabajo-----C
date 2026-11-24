import React from "react";

function UsuarioList({ usuarios, eliminar }) {
  return (
    <div className="lista">
      <h2>Usuarios registrados</h2>

      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        usuarios.map((usuario) => (
          <div className="usuario" key={usuario.id_usuario}>
            <div>
              <strong>{usuario.nombre}</strong>
              <p>{usuario.correo}</p>
            </div>
            <button
              className="boton-eliminar"
              onClick={() => eliminar(usuario.id_usuario)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default UsuarioList;
