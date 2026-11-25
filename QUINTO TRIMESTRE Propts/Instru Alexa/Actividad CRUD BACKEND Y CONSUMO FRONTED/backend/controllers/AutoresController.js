const db = require('../conexion/db');
const manejarError = require('./manejarError');

// POST /api/autores
exports.registrar = async (req, res) => {
  try {
    const { nombre, nacionalidad, fecha_nacimiento } = req.body;
    if (!nombre || !nombre.trim()) return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
    const [resultado] = await db.query(
      'INSERT INTO autores (nombre, nacionalidad, fecha_nacimiento) VALUES (?, ?, ?)',
      [nombre.trim(), nacionalidad || null, fecha_nacimiento || null]
    );
    res.status(201).json({ mensaje: 'Autor registrado correctamente', id: resultado.insertId });
  } catch (error) { manejarError(res, error); }
};

// GET /api/autores
exports.listar = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM autores ORDER BY id DESC');
    res.json(filas);
  } catch (error) { manejarError(res, error); }
};

// GET /api/autores/:id
exports.obtener = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM autores WHERE id = ?', [req.params.id]);
    if (filas.length === 0) return res.status(404).json({ mensaje: 'Autor no encontrado' });
    res.json(filas[0]);
  } catch (error) { manejarError(res, error); }
};

// PUT /api/autores/:id
exports.actualizar = async (req, res) => {
  try {
    const { nombre, nacionalidad, fecha_nacimiento } = req.body;
    if (!nombre || !nombre.trim()) return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
    const [resultado] = await db.query(
      'UPDATE autores SET nombre = ?, nacionalidad = ?, fecha_nacimiento = ? WHERE id = ?',
      [nombre.trim(), nacionalidad || null, fecha_nacimiento || null, req.params.id]
    );
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Autor no encontrado' });
    res.json({ mensaje: 'Autor actualizado correctamente' });
  } catch (error) { manejarError(res, error); }
};

// DELETE /api/autores/:id
exports.eliminar = async (req, res) => {
  try {
    const [resultado] = await db.query('DELETE FROM autores WHERE id = ?', [req.params.id]);
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Autor no encontrado' });
    res.json({ mensaje: 'Autor eliminado correctamente' });
  } catch (error) { manejarError(res, error); }
};
