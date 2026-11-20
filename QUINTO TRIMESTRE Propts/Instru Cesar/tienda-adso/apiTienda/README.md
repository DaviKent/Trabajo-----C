# apiTienda — API REST con Flask y MySQL

API REST para administrar el catálogo de productos de una tienda (CRUD completo).
Construida con **Flask**, **Flask-SQLAlchemy** (ORM), **Flask-CORS**, **PyMySQL** y **python-dotenv**.
Se consume desde una aplicación React + Vite (carpeta `tienda-frontend`).

## Estructura

```
apiTienda/
├── models/producto.py     # Modelo Producto (tabla productos)
├── routes/routes.py       # Rutas CRUD, validación y respuestas HTTP
├── app.py                 # Crea la aplicación Flask y la conecta a MySQL
├── config.py              # Lee las variables de entorno (.env)
├── extensions.py          # Objeto db (SQLAlchemy)
├── api.http               # Pruebas con la extensión REST Client
├── schema.sql             # Crea la base de datos tienda_adso
├── requirements.txt
└── .env.example
```

## Puesta en marcha

1. Crear la base de datos ejecutando `schema.sql` en MySQL Workbench.
2. Crear el archivo `.env` a partir de `.env.example` con tus credenciales.
3. Crear y activar el entorno virtual:
   ```bash
   python -m venv entorno
   entorno\Scripts\activate        # Windows
   source entorno/bin/activate     # Linux / macOS
   ```
4. Instalar dependencias: `pip install -r requirements.txt`
5. Ejecutar: `python app.py` → http://127.0.0.1:5000

## Endpoints

Todas las rutas comienzan con `/api/v1/productos`.

| Método | Endpoint | Descripción | Respuesta exitosa |
|--------|----------|-------------|-------------------|
| POST   | `/api/v1/productos`      | Registra un producto            | 201 |
| GET    | `/api/v1/productos`      | Obtiene todos los productos     | 200 |
| GET    | `/api/v1/productos/<id>` | Obtiene un producto por ID      | 200 |
| PUT    | `/api/v1/productos/<id>` | Actualiza un producto por ID    | 200 |
| DELETE | `/api/v1/productos/<id>` | Elimina un producto por ID      | 200 |

Otros códigos: **400** (JSON inválido o campos faltantes), **404** (el producto no existe),
**409** (código de producto duplicado), **500** (error inesperado de base de datos).

### Ejemplo de cuerpo (POST / PUT)

```json
{
  "proCodigo": "CL123",
  "proNombre": "Tennis",
  "proPrecio": 28000,
  "proCategoria": "Calzado"
}
```

## Pruebas

Instala la extensión **REST Client** en VS Code, abre `api.http` y pulsa **Send Request** sobre cada petición (o usa Postman).
