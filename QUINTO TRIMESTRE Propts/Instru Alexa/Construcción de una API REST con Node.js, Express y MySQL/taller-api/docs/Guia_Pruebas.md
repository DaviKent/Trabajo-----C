# Actividad 7 — Registro de pruebas con Postman

Importe la colección y ejecute cada petición. Pegue la captura en la última columna.

| Módulo | Método | Funcionalidad | URL | Resultado esperado | Evidencia |
|---|---|---|---|---|---|
| Prueba | GET | Bienvenida | /prueba | 200 mensaje de bienvenida | |
| Prueba | GET | Verificar servidor | /prueba/verificar | 200 `estado: true` | |
| Prueba | POST | Recibir datos | /prueba/recibir | 200 datos devueltos | |
| Prueba | POST | Sumar | /prueba/sumar | 200 `{"resultado":50}` | |
| Usuarios | POST | Registrar | /usuarios | 201 con id | |
| Usuarios | GET | Consultar todos | /usuarios | 200 lista | |
| Usuarios | GET | Buscar por ID | /usuarios/1 | 200 / 404 si no existe | |
| Usuarios | PUT | Actualizar | /usuarios/1 | 200 / 404 | |
| Usuarios | DELETE | Eliminar | /usuarios/1 | 200 / 404 | |
| Productos | POST | Registrar | /productos | 201 con id | |
| Productos | GET | Consultar todos | /productos | 200 lista | |
| Productos | GET | Buscar por ID | /productos/1 | 200 / 404 | |
| Productos | PUT | Actualizar | /productos/1 | 200 / 404 | |
| Productos | DELETE | Eliminar | /productos/1 | 200 / 404 | |
| Productos | GET | Agotados | /productos/agotados | 200 stock = 0 | |
| Productos | GET | Bajo inventario | /productos/bajo-stock | 200 stock < 5 | |

Las carpetas de la colección incluyen además las **pruebas incorrectas** (sin campos, valores negativos, IDs inexistentes), marcadas con el código esperado en el nombre.
