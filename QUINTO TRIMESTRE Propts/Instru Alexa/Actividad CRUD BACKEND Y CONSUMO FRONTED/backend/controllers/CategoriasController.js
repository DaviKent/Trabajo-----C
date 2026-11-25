const db = require('../conexion/db');
const manejarError = require('./manejarError');

// POST /api/categorias
exports.registrar = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    if (!nombre || !nombre.trim()) return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
    const [resultado] = await db.query(
      'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
      [nombre.trim(), descripcion || null]
    );
    res.status(201).json({ mensaje: 'Categoría registrada correctamente', id: resultado.insertId });
  } catch (error) { manejarError(res, error); }
};

// GET /api/categorias
exports.listar = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM categorias ORDER BY id DESC');
    res.json(filas);
  } catch (error) { manejarError(res, error); }
};

// GET /api/categorias/:id
exports.obtener = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM categorias WHERE id = ?', [req.params.id]);
    if (filas.length === 0) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.json(filas[0]);
  } catch (error) { manejarError(res, error); }
};

// PUT /api/categorias/:id
exports.actualizar = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    if (!nombre || !nombre.trim()) return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
    const [resultado] = await db.query(
      'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
      [nombre.trim(), descripcion || null, req.params.id]
    );
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.json({ mensaje: 'Categoría actualizada correctamente' });
  } catch (error) { manejarError(res, error); }
};

// DELETE /api/categorias/:id
exports.eliminar = async (req, res) => {
  try {
    const [resultado] = await db.query('DELETE FROM categorias WHERE id = ?', [req.params.id]);
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.json({ mensaje: 'Categoría eliminada correctamente' });
  } catch (error) { manejarError(res, error); }
};
