from flask_sqlalchemy import SQLAlchemy

# Objeto que representa la base de datos.
# Se crea aquí (y no en app.py) para que models/ y routes/ puedan importarlo
# sin imports circulares. En app.py se asocia a la aplicación con db.init_app(api).
db = SQLAlchemy()
