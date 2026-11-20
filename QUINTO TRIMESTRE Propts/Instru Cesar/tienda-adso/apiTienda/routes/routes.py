from flask import Blueprint, request, jsonify, current_app
from sqlalchemy import exc

from extensions import db
from models.producto import Producto

# Todas las rutas de productos comienzan con /api/v1/productos
productos_bp = Blueprint("productos", __name__, url_prefix="/api/v1/productos")

# Campo -> longitud máxima (None si no es texto)
CAMPOS = {
    "proCodigo": 30,
    "proNombre": 100,
    "proPrecio": None,
    "proCategoria": 50,
}


def validar(datos):
    """Valida el JSON recibido. Devuelve (datos_limpios, mensaje_error)."""
    if not isinstance(datos, dict):
        return None, "JSON inválido: se esperaba un objeto"

    faltantes = [c for c in CAMPOS if datos.get(c) in (None, "")]
    if faltantes:
        return None, f"Campos faltantes: {', '.join(faltantes)}"

    try:
        precio = float(datos["proPrecio"])
    except (TypeError, ValueError):
        return None, "proPrecio debe ser un número"
    if precio < 0:
        return None, "proPrecio no puede ser negativo"

    limpio = {"proPrecio": precio}
    for campo, maximo in CAMPOS.items():
        if maximo is None:
            continue
        valor = str(datos[campo]).strip()
        if not valor:
            return None, f"{campo} no puede estar vacío"
        if len(valor) > maximo:
            return None, f"{campo} no puede superar {maximo} caracteres"
        limpio[campo] = valor
    return limpio, None


def respuesta(mensaje, status, **extra):
    return jsonify({"mensaje": mensaje, **extra}), status


# ---------- CREATE ----------
@productos_bp.route("", methods=["POST"], strict_slashes=False)
def crearProducto():
    datos, error = validar(request.get_json(force=True, silent=True))
    if error:
        return respuesta(error, 400)
    try:
        producto = Producto(**datos)
        db.session.add(producto)
        db.session.commit()
        return respuesta("Producto agregado correctamente", 201,
                         Producto=producto.to_dict())
    except exc.IntegrityError:
        db.session.rollback()
        return respuesta("Ya existe un producto con ese código", 409)
    except exc.SQLAlchemyError:
        db.session.rollback()
        current_app.logger.exception("Error al crear producto")
        return respuesta("Error inesperado en la base de datos", 500)


# ---------- READ (todos) ----------
@productos_bp.route("", methods=["GET"], strict_slashes=False)
def obtenerProductos():
    try:
        productos = Producto.query.order_by(Producto.idProducto).all()
        return respuesta("Productos", 200,
                         Productos=[p.to_dict() for p in productos])
    except exc.SQLAlchemyError:
        current_app.logger.exception("Error al listar productos")
        return respuesta("Error inesperado en la base de datos", 500)


# ---------- READ (por ID) ----------
@productos_bp.route("/<int:idProducto>", methods=["GET"])
def obtenerProductoPorID(idProducto):
    try:
        producto = db.session.get(Producto, idProducto)
        if producto is None:
            return respuesta("No existe producto con ese ID", 404)
        return respuesta("Producto encontrado", 200, Producto=producto.to_dict())
    except exc.SQLAlchemyError:
        current_app.logger.exception("Error al consultar producto")
        return respuesta("Error inesperado en la base de datos", 500)


# ---------- UPDATE ----------
@productos_bp.route("/<int:idProducto>", methods=["PUT"])
def actualizarProducto(idProducto):
    try:
        producto = db.session.get(Producto, idProducto)
        if producto is None:
            return respuesta("No existe producto con ese ID", 404)

        datos, error = validar(request.get_json(force=True, silent=True))
        if error:
            return respuesta(error, 400)

        producto.proCodigo = datos["proCodigo"]
        producto.proNombre = datos["proNombre"]
        producto.proPrecio = datos["proPrecio"]
        producto.proCategoria = datos["proCategoria"]
        db.session.commit()
        return respuesta("Producto actualizado", 200, Producto=producto.to_dict())
    except exc.IntegrityError:
        db.session.rollback()
        return respuesta("Ya existe un producto con ese código", 409)
    except exc.SQLAlchemyError:
        db.session.rollback()
        current_app.logger.exception("Error al actualizar producto")
        return respuesta("Error inesperado en la base de datos", 500)


# ---------- DELETE ----------
@productos_bp.route("/<int:idProducto>", methods=["DELETE"])
def eliminarProducto(idProducto):
    try:
        producto = db.session.get(Producto, idProducto)
        if producto is None:
            return respuesta("No existe producto con ese ID", 404)
        db.session.delete(producto)
        db.session.commit()
        return respuesta("Producto eliminado", 200)
    except exc.SQLAlchemyError:
        db.session.rollback()
        current_app.logger.exception("Error al eliminar producto")
        return respuesta("Error inesperado en la base de datos", 500)
