# Guía de entrega — API Flask + React

Entrega: **URL del repositorio** (con la app React y la API) + **video** explicando el funcionamiento.

## 1. Probar todo en local
1. MySQL Workbench → ejecutar `apiTienda/schema.sql`.
2. Revisar `apiTienda/.env` (usuario y contraseña de TU MySQL).
3. Terminal 1 (API):
   ```bash
   cd apiTienda
   python -m venv entorno
   entorno\Scripts\activate
   pip install -r requirements.txt
   python app.py
   ```
4. Probar con `apiTienda/api.http` (extensión REST Client) o Postman.
5. Terminal 2 (React):
   ```bash
   cd tienda-frontend
   npm install
   npm run dev
   ```
   Abrir http://localhost:5173

## 2. Subir a GitHub (pasos 17 y 18 del documento)
Opción recomendada: **un solo repositorio** con las dos carpetas, para entregar una sola URL.
```bash
cd tienda-adso
git init
git add .
git status        # verifica que NO aparezca apiTienda/.env ni entorno/ ni node_modules/
git commit -m "API Flask + MySQL y cliente React + Vite"
git branch -M main
git remote add origin https://github.com/davikent/<nombre-del-repo>.git
git push -u origin main
```
(Crea primero el repositorio vacío en github.com.) El `README.md` de cada carpeta es el archivo `.md` que pide el paso 18.

## 3. Guion sugerido para el video (3–5 min)
1. **API**: mostrar la estructura (`models`, `routes`, `app.py`, `config.py`, `.env`) y explicar qué hace cada archivo.
2. Ejecutar `python app.py` y probar las 5 rutas en `api.http` (mostrar 201, 200, 404).
3. **React**: mostrar `services/productoService.js` (acceso a la API) y los componentes.
4. Con ambos corriendo: agregar un producto, verlo en el inventario, consultarlo por ID, editarlo y eliminarlo.
5. Mostrar en MySQL Workbench que la tabla `productos` cambia.
