# Sistema de Gestión de Biblioteca (React · Node.js · Express · MySQL)

## 1. Base de datos (MySQL Workbench)
1. Abre MySQL Workbench y conéctate a tu servidor local.
2. `File > Open SQL Script...` y elige `database/biblioteca.sql`.
3. Ejecuta todo el script (icono del rayo). Crea la base `biblioteca`, las 5 tablas con PK/FK y datos de ejemplo.
4. Para ver el diagrama (útil para el video): `Database > Reverse Engineer...` → esquema `biblioteca`.

## 2. Backend
```bash
cd backend
npm install
```
Abre `conexion/db.js` y pon tu contraseña de MySQL en `password` (o usa la variable de entorno `DB_PASSWORD`).
```bash
npm run dev     # con nodemon
# o: npm start
```
Debe mostrar: `Servidor escuchando en http://localhost:3000` y `Conexión a MySQL (biblioteca) exitosa`.

## 3. Frontend
```bash
cd frontend
npm install
npm run dev
```
Abre la URL que muestra Vite (normalmente http://localhost:5173).

## 4. Pruebas en Postman
Importa `evidencias/pruebas/biblioteca.postman_collection.json` y ejecuta las peticiones de cada entidad.
Orden recomendado: autores → categorías → usuarios → libros → préstamos.
Guarda capturas de pantalla en `evidencias/pruebas/`.

## 5. Endpoints
| Entidad | POST | GET | GET uno | PUT | DELETE |
|---|---|---|---|---|---|
| Usuarios | /api/usuarios | /api/usuarios | /api/usuarios/:id | /api/usuarios/:id | /api/usuarios/:id |
| Autores | /api/autores | /api/autores | /api/autores/:id | /api/autores/:id | /api/autores/:id |
| Categorías | /api/categorias | /api/categorias | /api/categorias/:id | /api/categorias/:id | /api/categorias/:id |
| Libros | /api/libros | /api/libros (JOIN) | /api/libros/:id | /api/libros/:id | /api/libros/:id |
| Préstamos | /api/prestamos | /api/prestamos (JOIN) | /api/prestamos/:id | /api/prestamos/:id | /api/prestamos/:id |

## 6. Entrega
Renombra la carpeta a `Proyecto_Biblioteca_ApellidoNombre`, borra `node_modules` y coloca tus dos videos en `videos/`.
