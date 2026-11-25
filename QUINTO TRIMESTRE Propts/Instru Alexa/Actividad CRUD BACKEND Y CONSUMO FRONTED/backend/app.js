const express = require('express');
const cors = require('cors');
const db = require('./conexion/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ mensaje: 'API de la biblioteca funcionando' }));

app.use('/api/usuarios', require('./routes/usuariosRoutes'));
app.use('/api/autores', require('./routes/autoresRoutes'));
app.use('/api/categorias', require('./routes/categoriasRoutes'));
app.use('/api/libros', require('./routes/librosRoutes'));
app.use('/api/prestamos', require('./routes/prestamosRoutes'));

app.use((req, res) => res.status(404).json({ mensaje: 'Ruta no encontrada' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor en http://localhost:${PORT}`);
  try {
    await db.query('SELECT 1');
    console.log('Conexión exitosa');
  } catch (error) {
    console.error('No se pudo conectar a MySQL:', error.message);
  }
});
