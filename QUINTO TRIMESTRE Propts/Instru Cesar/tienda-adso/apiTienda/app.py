from urllib.parse import quote_plus
from flask import Flask
from flask_cors import CORS
from config import *
from extensions import db

# Se crea el objeto de tipo Flask
api = Flask(__name__)

# CORS: permite que React (Vite, puerto 5173) consuma la API (Flask, puerto 5000).
# Importante: CORS() solo no hace nada; hay que asociarlo a la aplicación.
CORS(api, resources={r"/api/*": {"origins": [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]}})

# Cadena de conexión a MySQL (quote_plus protege contraseñas con caracteres especiales)
cadenaConexion = (
    f"mysql+pymysql://{DB_USER}:{quote_plus(DB_PASSWORD)}"
    f"@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)
api.config["SQLALCHEMY_DATABASE_URI"] = cadenaConexion
api.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Se asocia el objeto SQLAlchemy a la aplicación Flask
db.init_app(api)

# Se importan el modelo (para que db.create_all() conozca la tabla) y las rutas
from models.producto import Producto  # noqa: E402,F401
from routes.routes import productos_bp  # noqa: E402

api.register_blueprint(productos_bp)

if __name__ == "__main__":
    with api.app_context():
        # Crea las tablas del modelo si no existen
        db.create_all()
    api.run(port=5000, debug=True)
