# API de solicitudes con Express

## descripción

Este proyecto consiste en una API básica desarrollada con Node.js y Express. Permite consultar información, recibir solicitudes, validar datos y comprobar el funcionamiento de los middleware.

## tecnologías utilizadas

- Node.js
- Express
- JavaScript
- Thunder Client para realizar pruebas.

## requisitos

- Tener instalado Node.js.
- Tener instalado npm.
- Contar con Visual Studio Code para trabajar con el proyecto.

## instalación

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir la terminal y ejecutar el siguiente comando para instalar las dependencias:

   ```bash
   npm install express
   ```

## ejecución del servidor

Para iniciar el servidor, ejecutar el siguiente comando en la terminal:

```bash
node app.js
```

El servidor se ejecutará en el puerto `1500`.

Si todo funciona correctamente, aparecerá el siguiente mensaje:

```text
Servidor ejecutandose correctamente 1500
```

## rutas de la API

| método | ruta | descripción |
|---|---|---|
| GET | `/inicio` | Muestra un mensaje de bienvenida. |
| GET | `/info` | Devuelve información general del servicio. |
| POST | `/soli` | Recibe nombre, apellido y correo, y devuelve los datos. |
| POST | `/validar` | Comprueba que los campos estén completos y que el correo sea válido. |
| POST | `/vali` | Valida los campos y el formato básico del correo. |
| GET | `/regis` | Responde que la consulta de registros se realizó. |
| POST | `/regisnu` | Responde que el registro fue recibido correctamente. |

## middleware

El proyecto utiliza `express.json()` para interpretar los datos enviados en formato JSON y permitir el acceso mediante `req.body`.

También incluye un middleware global que muestra en la terminal el método HTTP y la ruta de cada petición recibida.

## validaciones

La API comprueba que los campos de nombre, apellido y correo estén completos. También verifica que el correo contenga los caracteres `@` y `.`.

Si falta algún campo o el correo no cumple la validación, la API responde con el código HTTP `400`.

## manejo de rutas inexistentes

Cuando se solicita una ruta que no existe, la API devuelve el código HTTP `404` con el mensaje "Ruta no encontrada".

## pruebas

Las rutas pueden probarse con Thunder Client, enviando peticiones GET o POST.

Para las rutas POST que reciben datos, se debe seleccionar el formato JSON y enviar un cuerpo como el siguiente:

```json
{
    "nombre": "Cristian",
    "apellido": "Yalanda",
    "correo": "cristian@gmail.com"
}
```

## autor

Cristian Yalanda
