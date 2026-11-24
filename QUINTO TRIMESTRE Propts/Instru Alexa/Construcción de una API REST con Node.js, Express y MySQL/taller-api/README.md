# Taller API REST — Node.js, Express y MySQL

## Estructura
```
taller-api/
├── app.js                      # servidor + conexión MySQL (centralizada)
├── database.sql                # BD taller_api, tablas y datos de ejemplo
├── package.json
├── controllers/
│   ├── PruebaController.js
│   ├── UsuariosController.js
│   └── ProductosController.js
├── routes/
│   ├── PruebaRoutes.js
│   ├── UsuariosRoutes.js
│   └── ProductosRoutes.js
├── utils/manejarError.js       # manejo de errores y validaciones comunes
├── postman/Taller_API.postman_collection.json
└── docs/
    ├── Errores.md              # Actividad 6
    ├── Respuestas.md           # análisis y sustentación
    └── Guia_Pruebas.md         # Actividad 7
```

## Puesta en marcha
1. Instalar dependencias: `npm install`
2. Crear la BD: `mysql -u root -p < database.sql`
3. (Opcional) credenciales: `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` (por defecto root, sin contraseña, `taller_api`).
4. Ejecutar: `npm run dev` → http://localhost:3000
5. Importar `postman/Taller_API.postman_collection.json` en Postman.

## Endpoints
| Módulo | Método | URL |
|---|---|---|
| Prueba | GET | /prueba |
| Prueba | GET | /prueba/verificar |
| Prueba | POST | /prueba/recibir |
| Prueba | POST | /prueba/sumar |
| Usuarios | POST/GET | /usuarios |
| Usuarios | GET/PUT/DELETE | /usuarios/:id |
| Productos | POST/GET | /productos |
| Productos | GET/PUT/DELETE | /productos/:id |
| Productos | GET | /productos/agotados |
| Productos | GET | /productos/bajo-stock |
