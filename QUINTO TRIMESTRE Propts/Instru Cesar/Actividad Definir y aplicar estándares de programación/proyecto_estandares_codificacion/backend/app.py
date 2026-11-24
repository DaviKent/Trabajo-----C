from flask import Flask
from flask_cors import CORS
from database import crear_tabla
from routes.usuarios import usuarios_bp

app = Flask(__name__)
CORS(app)

crear_tabla()
app.register_blueprint(usuarios_bp, url_prefix="/api")


@app.route("/")
def inicio():
    """Muestra un mensaje para comprobar que la API está funcionando."""
    return {"mensaje": "API de gestión de usuarios funcionando correctamente"}


if __name__ == "__main__":
    app.run(debug=True, port=5000)
