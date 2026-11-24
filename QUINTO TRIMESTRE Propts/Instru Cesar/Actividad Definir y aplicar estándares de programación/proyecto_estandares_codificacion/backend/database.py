import sqlite3

NOMBRE_BASE_DATOS = "gestion_usuarios.db"


def obtener_conexion():
    """Crea y retorna una conexión con la base de datos."""
    conexion = sqlite3.connect(NOMBRE_BASE_DATOS)
    conexion.row_factory = sqlite3.Row
    return conexion


def crear_tabla():
    """Crea la tabla usuarios si todavía no existe."""
    conexion = obtener_conexion()
    conexion.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            correo TEXT NOT NULL UNIQUE
        )
    """)
    conexion.commit()
    conexion.close()
