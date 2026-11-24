# Respuestas de análisis y sustentación

## A. Preguntas de análisis por actividad

### Actividad 1
- **¿Qué sucede si no instala Express?** Node lanza `Cannot find module 'express'` y el servidor no arranca.
- **¿Y si olvida `express.json()` y envía JSON?** `req.body` llega `undefined` (Express 4) y falla al leerlo; no se parsea el cuerpo.
- **¿Y si el puerto 3000 está ocupado?** Error `EADDRINUSE`; el servidor no inicia. Se libera el puerto o se cambia.
- **¿Y si escribe mal la ruta de importación?** `Cannot find module './ruta'`, con la pila indicando el archivo que hizo el `require`.

### Actividad 2
- **POST sin información:** `req.body` es `{}` o `undefined`; la API responde 400 indicando campos obligatorios.
- **Edad como texto:** nuestra validación **no la acepta** (`typeof edad !== 'number'` → 400). Sin validar, JavaScript la aceptaría tal cual, y podrían surgir comparaciones/sumas incorrectas.
- **Números como cadenas en `sumar`:** sin validación `"20" + "30"` da `"2030"` (concatenación). Con validación se rechaza con 400. Enviar números reales (`20`, `30`) da `{ "resultado": 50 }`.
- **Omitir un campo:** responde 400 con el mensaje del campo faltante.
- **`req` undefined:** `Cannot read properties of undefined (reading 'body')`. Ocurre al invocar el método manualmente o ejecutarlo en la ruta (`controller.recibir()`).

### Actividad 3
- Registrar con todos los campos → 201 y el `id` generado.
- Sin nombre o apellido → 400 (o `ER_BAD_NULL_ERROR` si no se validara).
- ID inexistente (consultar/actualizar) → 404.
- Eliminar y volver a consultar → primero 200, luego 404.
- MySQL desconectado → 503 `No hay conexión con la base de datos` (error capturado con try/catch, la API no se cae).

### Actividad 4
- **Precio negativo:** se valida `precio >= 0` en el servidor (400). Idealmente también con `CHECK (precio >= 0)` en la base.
- **Stock negativo:** se valida entero `>= 0` (400); en BD, `INT UNSIGNED` o `CHECK`.
- **Precio como texto no numérico:** `typeof precio !== 'number'` → 400. Sin validar, MySQL puede dar error o convertirlo a 0.
- **Sin nombre:** 400. **Producto inexistente:** 404.
- **Agotados** (`stock = 0`) y **bajo inventario** (`stock < 5`, que incluye los agotados según el enunciado).

## B. Preguntas de sustentación

1. **¿Qué es Node.js y cuál es su función?** Entorno de ejecución de JavaScript fuera del navegador (motor V8), orientado a eventos y no bloqueante. Aquí ejecuta el servidor de la API.
2. **¿Qué es Express y qué ventajas ofrece?** Framework minimalista para Node. Simplifica rutas, middlewares y manejo de peticiones/respuestas; es ligero, flexible y tiene gran ecosistema.
3. **¿Qué es una API REST?** Interfaz que expone recursos (usuarios, productos) mediante URLs y los métodos HTTP estándar, sin estado y normalmente con JSON.
4. **GET, POST, PUT y DELETE:** GET consulta; POST crea; PUT actualiza/reemplaza un recurso; DELETE lo elimina.
5. **`express.json()`:** middleware que lee el cuerpo de las peticiones con `Content-Type: application/json` y lo deja en `req.body` como objeto.
6. **Clase en JavaScript:** plantilla (azúcar sintáctico sobre prototipos) que define propiedades y métodos para crear objetos.
7. **Objeto e instanciación:** un objeto es una instancia concreta con estado y comportamiento; se crea con `new`, p. ej. `new UsuariosController(db)`.
8. **Constructor:** método especial que se ejecuta al instanciar; inicializa el objeto (aquí guarda la conexión `this.db`).
9. **Método tradicional vs. propiedad con función flecha:** el método tradicional vive en el prototipo y su `this` depende de cómo se llame (se pierde al pasarlo como callback). La flecha como propiedad se crea por instancia y conserva el `this` de la instancia, evitando `bind`; usa algo más de memoria.
10. **`module.exports`:** define lo que un archivo expone para que otros lo importen (clases, funciones, routers).
11. **`require()`:** carga un módulo (paquete npm o archivo propio) en CommonJS y devuelve lo exportado.
12. **Responsabilidad del Controller:** contiene la lógica de cada operación: valida datos, consulta la BD y arma la respuesta HTTP.
13. **Responsabilidad de Routes:** asocia método HTTP + URL con el método del Controller correspondiente y organiza los endpoints por módulo con `express.Router()`.
14. **¿Por qué la conexión se comparte desde app.js?** Para tener un único punto de configuración, evitar abrir conexiones repetidas en cada archivo y facilitar cambios de credenciales. Se inyecta a los Controllers (inyección de dependencias).
15. **Signos `?` en SQL parametrizado:** son marcadores de posición; los valores se envían aparte y el driver los escapa, **previniendo inyección SQL**.
16. **¿Por qué controlar errores?** Para que la API no se caiga, devuelva códigos HTTP correctos (400, 404, 500, 503), mensajes claros, no exponga detalles internos y sea más fácil de depurar y mantener.
