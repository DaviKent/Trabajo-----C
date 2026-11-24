from flask import Blueprint, request
from database import obtener_conexion

usuarios_bp = Blueprint("usuarios", __name__)


@usuarios_bp.route("/usuarios", methods=["GET"])
def listar_usuarios():
    """Consulta y retorna todos los usuarios registrados."""
    conexion = obtener_conexion()
    usuarios = conexion.execute(
        "SELECT * FROM usuarios ORDER BY id_usuario"
    ).fetchall()
    conexion.close()

    return [dict(usuario) for usuario in usuarios]


@usuarios_bp.route("/usuarios/<int:id_usuario>", methods=["GET"])
def consultar_usuario(id_usuario):
    """Consulta un usuario usando su identificador."""
    conexion = obtener_conexion()
    usuario = conexion.execute(
        "SELECT * FROM usuarios WHERE id_usuario = ?",
        (id_usuario,)
    ).fetchone()
    conexion.close()

    if usuario is None:
        return {"mensaje": "Usuario no encontrado"}, 404

    return dict(usuario)


@usuarios_bp.route("/usuarios", methods=["POST"])
def registrar_usuario():
    """Valida los datos y registra un nuevo usuario."""
    datos = request.get_json()

    if not datos:
        return {"mensaje": "Debe enviar los datos en formato JSON"}, 400

    nombre = datos.get("nombre", "").strip()
    correo = datos.get("correo", "").strip()

    if not nombre or not correo:
        return {"mensaje": "El nombre y el correo son obligatorios"}, 400

    conexion = obtener_conexion()

    try:
        cursor = conexion.execute(
            "INSERT INTO usuarios (nombre, correo) VALUES (?, ?)",
            (nombre, correo)
        )
        conexion.commit()
        id_usuario = cursor.lastrowid
    except Exception:
        conexion.close()
        return {"mensaje": "No se pudo registrar. Verifique que el correo no exista"}, 400

    conexion.close()
    return {
        "mensaje": "Usuario registrado correctamente",
        "id_usuario": id_usuario
    }, 201


@usuarios_bp.route("/usuarios/<int:id_usuario>", methods=["PUT"])
def actualizar_usuario(id_usuario):
    """Actualiza el nombre y el correo de un usuario existente."""
    datos = request.get_json()

    if not datos:
        return {"mensaje": "Debe enviar los datos en formato JSON"}, 400

    nombre = datos.get("nombre", "").strip()
    correo = datos.get("correo", "").strip()

    if not nombre or not correo:
        return {"mensaje": "El nombre y el correo son obligatorios"}, 400

    conexion = obtener_conexion()
    cursor = conexion.execute(
        "UPDATE usuarios SET nombre = ?, correo = ? WHERE id_usuario = ?",
        (nombre, correo, id_usuario)
    )
    conexion.commit()
    conexion.close()

    if cursor.rowcount == 0:
        return {"mensaje": "Usuario no encontrado"}, 404

    return {"mensaje": "Usuario actualizado correctamente"}


@usuarios_bp.route("/usuarios/<int:id_usuario>", methods=["DELETE"])
def eliminar_usuario(id_usuario):
    """Elimina un usuario usando su identificador."""
    conexion = obtener_conexion()
    cursor = conexion.execute(
        "DELETE FROM usuarios WHERE id_usuario = ?",
        (id_usuario,)
    )
    conexion.commit()
    conexion.close()

    if cursor.rowcount == 0:
        return {"mensaje": "Usuario no encontrado"}, 404

    return {"mensaje": "Usuario eliminado correctamente"}

