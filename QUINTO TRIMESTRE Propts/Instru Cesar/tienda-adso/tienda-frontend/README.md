# tienda-frontend — React + Vite

Aplicación web que consume la API REST `apiTienda` (Flask + MySQL) y permite:

- **Agregar** un producto
- **Listar** todos los productos
- **Consultar** un producto por su ID
- **Actualizar** un producto (botón *Editar*)
- **Eliminar** un producto

## Estructura

```
src/
├── services/productoService.js   # Acceso a la API (fetch)
├── components/
│   ├── ProductoForm.jsx          # Crear / editar
│   ├── ProductoTabla.jsx         # Listado con Editar y Eliminar
│   └── BuscarPorId.jsx           # Consulta por ID
├── App.jsx                       # Estado general y flujo CRUD
└── index.css
```

## Cómo ejecutarlo

1. Tener la API corriendo en `http://127.0.0.1:5000` (ver `apiTienda/README.md`).
2. Instalar dependencias y ejecutar:
   ```bash
   npm install
   npm run dev
   ```
3. Abrir http://localhost:5173

La URL de la API se configura en `.env` con la variable `VITE_API_URL`.
