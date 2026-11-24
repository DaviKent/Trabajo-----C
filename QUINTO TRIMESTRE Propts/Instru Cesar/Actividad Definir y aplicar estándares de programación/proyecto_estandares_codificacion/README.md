# Proyecto: estándares de codificación

Proyecto de ejemplo para la actividad del SENA **Definir y aplicar estándares de codificación**.

Incluye:
- Backend: API REST desarrollada con Python y Flask.
- Frontend: interfaz desarrollada con React y Vite.
- Base de datos: SQLite.

## 1. Requisitos
- Python 3.10 o superior.
- Node.js y npm.

## 2. Ejecutar el backend

Abre una terminal en la carpeta `backend` y ejecuta:

```bash
python -m venv venv
```

En Windows:
```bash
venv\Scripts\activate
```

Instala las dependencias:
```bash
pip install -r requirements.txt
```

Inicia la API:
```bash
python app.py
```

La API estará disponible en `http://127.0.0.1:5000`.

## 3. Ejecutar el frontend

Abre otra terminal en la carpeta `frontend`:

```bash
npm install
npm run dev
```

Abre la dirección que muestra Vite, normalmente `http://localhost:5173`.

## 4. Endpoints de la API

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/usuarios` | Consultar todos los usuarios |
| GET | `/api/usuarios/<id>` | Consultar un usuario |
| POST | `/api/usuarios` | Registrar un usuario |
| PUT | `/api/usuarios/<id>` | Actualizar un usuario |
| DELETE | `/api/usuarios/<id>` | Eliminar un usuario |

Para registrar o actualizar, enviar JSON con `nombre` y `correo`.

Ejemplo:
```json
{
  "nombre": "Cristian",
  "correo": "cristian@example.com"
}
```

## 5. Estándares aplicados

### Python (Backend)
- Variables y funciones: `snake_case`.
- Constantes: `MAYUSCULAS_CON_GUION_BAJO`.
- Clases: `PascalCase`.
- Archivos y módulos: nombres en minúsculas.
- Indentación: 4 espacios.
- Funciones documentadas con docstrings.
- Separación de responsabilidades: aplicación, conexión a base de datos y rutas.

### React (Frontend)
- Variables y funciones: `camelCase`.
- Constantes: `MAYUSCULAS_CON_GUION_BAJO`.
- Componentes: `PascalCase`.
- Archivos de componentes: `PascalCase.jsx`.
- Estilos: archivo CSS separado.
- Indentación: 2 espacios.
- Componentes separados de los servicios que consumen la API.

### Base de datos
- Base de datos: `gestion_usuarios.db`.
- Tabla: `usuarios`.
- Campos: `id_usuario`, `nombre`, `correo`.
- Nombres en minúsculas y `snake_case`.
- Clave primaria: `id_usuario`.

## 6. Nota
Este es un proyecto educativo. La base de datos SQLite se crea automáticamente al iniciar el backend.
