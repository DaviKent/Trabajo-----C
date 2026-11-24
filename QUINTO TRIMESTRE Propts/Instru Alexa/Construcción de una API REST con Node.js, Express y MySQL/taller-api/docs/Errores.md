# Documento de identificación y solución de errores

> Para cada error: provóquelo, copie el mensaje real que ve en su consola/Postman y pegue la captura en **Evidencia**.
> Los números de línea son aproximados y dependen de su versión del código.

---

## 1. No instalar Express
| Aspecto | Registro |
|---|---|
| Error presentado | `Error: Cannot find module 'express'` y `code: 'MODULE_NOT_FOUND'` |
| Archivo donde ocurrió | app.js (y routes/*.js) |
| Línea aproximada | 1 (`const express = require('express')`) |
| Causa identificada | El paquete no está en `node_modules` (no se ejecutó `npm install express`, o se borró la carpeta). |
| Solución aplicada | Ejecutar `npm install` (o `npm install express`) en la carpeta del proyecto y reiniciar. |
| Evidencia (captura) | *(pegar captura)* |

## 2. Importar una ruta incorrecta
| Aspecto | Registro |
|---|---|
| Error presentado | `Error: Cannot find module './routes/UsuarioRoutes'` |
| Archivo donde ocurrió | app.js |
| Línea aproximada | 33 |
| Causa identificada | Nombre de archivo mal escrito (falta la "s"), diferencia de mayúsculas/minúsculas o ruta relativa errónea. |
| Solución aplicada | Corregir a `require('./routes/UsuariosRoutes')` verificando nombre exacto y la ruta relativa. |
| Evidencia (captura) | *(pegar captura)* |

## 3. No configurar express.json()
| Aspecto | Registro |
|---|---|
| Error presentado | `TypeError: Cannot destructure property 'nombre' of 'req.body' as it is undefined` (Express 4: `req.body` es `undefined`). |
| Archivo donde ocurrió | controllers/UsuariosController.js |
| Línea aproximada | 10 |
| Causa identificada | Sin `app.use(express.json())` Express no interpreta el cuerpo JSON. |
| Solución aplicada | Añadir `app.use(express.json())` **antes** de registrar las rutas en app.js. |
| Evidencia (captura) | *(pegar captura)* |

## 4. Ejecutar guardar() en vez de pasar el método
| Aspecto | Registro |
|---|---|
| Error presentado | `TypeError: Cannot read properties of undefined (reading 'body')` al arrancar el servidor; la ruta nunca responde. |
| Archivo donde ocurrió | routes/UsuariosRoutes.js |
| Línea aproximada | 8 |
| Causa identificada | `router.post('/', controller.guardar())` **ejecuta** el método inmediatamente (sin req/res). Express necesita la *referencia* a la función. |
| Solución aplicada | Escribir `router.post('/', controller.guardar)` (sin paréntesis). |
| Evidencia (captura) | *(pegar captura)* |

## 5. Usar bind() incorrectamente / perder `this`
| Aspecto | Registro |
|---|---|
| Error presentado | `TypeError: Cannot read properties of undefined (reading 'query')` (this.db es undefined). |
| Archivo donde ocurrió | controllers/UsuariosController.js |
| Línea aproximada | 16 |
| Causa identificada | Con métodos tradicionales (`async guardar(req,res){}`) pasados como `controller.guardar`, Express los llama sin instancia y `this` se pierde. Un `bind(this)` mal puesto (por ejemplo `bind(controller.guardar)`) tampoco lo resuelve. |
| Solución aplicada | Definir los métodos como funciones flecha (`guardar = async (req, res) => {}`) o usar `controller.guardar.bind(controller)` en la ruta. |
| Evidencia (captura) | *(pegar captura)* |

## 6. No conectar con MySQL
| Aspecto | Registro |
|---|---|
| Error presentado | Consola: `❌ Error de conexión a MySQL: ECONNREFUSED`; Postman: `503 No hay conexión con la base de datos`. |
| Archivo donde ocurrió | app.js |
| Línea aproximada | 22 |
| Causa identificada | MySQL apagado, host/puerto/usuario/contraseña incorrectos, o la base `taller_api` no existe (`ER_BAD_DB_ERROR`). |
| Solución aplicada | Iniciar el servicio MySQL, revisar credenciales (variables `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) y ejecutar `database.sql`. |
| Evidencia (captura) | *(pegar captura)* |

## 7. Escribir mal el nombre de una tabla
| Aspecto | Registro |
|---|---|
| Error presentado | `ER_NO_SUCH_TABLE: Table 'taller_api.usuario' doesn't exist` |
| Archivo donde ocurrió | controllers/UsuariosController.js |
| Línea aproximada | 29 |
| Causa identificada | La consulta usa `usuario` en lugar de `usuarios`. |
| Solución aplicada | Corregir el nombre de la tabla en la consulta SQL. |
| Evidencia (captura) | *(pegar captura)* |

## 8. Enviar NULL a una columna NOT NULL
| Aspecto | Registro |
|---|---|
| Error presentado | `ER_BAD_NULL_ERROR: Column 'nombre' cannot be null` |
| Archivo donde ocurrió | controllers/UsuariosController.js (INSERT) |
| Línea aproximada | 14 |
| Causa identificada | Se intenta insertar sin validar y el valor llega `undefined`/`null` a una columna `NOT NULL`. |
| Solución aplicada | Validar `nombre` y `apellido` antes del INSERT (devuelve 400) y mantener el manejo del código `ER_BAD_NULL_ERROR` como respaldo. |
| Evidencia (captura) | *(pegar captura)* |

## 9. Consultar un ID inexistente
| Aspecto | Registro |
|---|---|
| Error presentado | Respuesta vacía o `TypeError ... of undefined` si se asume que `filas[0]` existe. |
| Archivo donde ocurrió | controllers/UsuariosController.js (`buscar`) |
| Línea aproximada | 45 |
| Causa identificada | `SELECT` sin coincidencias devuelve `[]` (cero filas); no es un error de MySQL. |
| Solución aplicada | Comprobar `filas.length === 0` y responder `404 Usuario no encontrado`. |
| Evidencia (captura) | *(pegar captura)* |

## 10. Invocar un método sin req/res
| Aspecto | Registro |
|---|---|
| Error presentado | `TypeError: Cannot read properties of undefined (reading 'body')` |
| Archivo donde ocurrió | controllers/PruebaController.js |
| Línea aproximada | 14 |
| Causa identificada | Se llama `controller.recibir()` manualmente sin pasar `req` y `res`, o `req` llega undefined. |
| Solución aplicada | Pasar siempre la referencia a Express (`router.post('/recibir', controller.recibir)`) y, defensivamente, validar `if (!req \|\| !req.body)`. |
| Evidencia (captura) | *(pegar captura)* |

---

## Extra: puerto 3000 ocupado
Error: `EADDRINUSE: address already in use :::3000`. Causa: otro proceso usa el puerto (otra instancia de la API). Solución: cerrar ese proceso (`lsof -i :3000` / `netstat -ano | findstr :3000`) o cambiar `PORT`. app.js ya muestra un mensaje claro.
