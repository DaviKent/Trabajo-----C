const db = require('../conexion/db');
const manejarError = require('./manejarError');

// POST /api/usuarios
exports.registrar = async (req, res) => {
  try {
    const { nombre, correo, telefono, estado } = req.body;          // req.body: datos enviados en el JSON
    if (!nombre || !nombre.trim()) return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
    const [resultado] = await db.query(
      'INSERT INTO usuarios (nombre, correo, telefono, estado) VALUES (?, ?, ?, ?)',
      [nombre.trim(), correo || null, telefono || null, estado || 'activo']
    );
    res.status(201).json({ mensaje: 'Usuario registrado correctamente', id: resultado.insertId });
  } catch (error) { manejarError(res, error); }
};

// GET /api/usuarios
exports.listar = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM usuarios ORDER BY id DESC');
    res.json(filas);
  } catch (error) { manejarError(res, error); }
};

// GET /api/usuarios/:id
exports.obtener = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id]); // req.params: parte variable de la URL
    if (filas.length === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json(filas[0]);
  } catch (error) { manejarError(res, error); }
};

// PUT /api/usuarios/:id
exports.actualizar = async (req, res) => {
  try {
    const { nombre, correo, telefono, estado } = req.body;
    if (!nombre || !nombre.trim()) return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
    const [resultado] = await db.query(
      'UPDATE usuarios SET nombre = ?, correo = ?, telefono = ?, estado = ? WHERE id = ?',
      [nombre.trim(), correo || null, telefono || null, estado || 'activo', req.params.id]
    );
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario actualizado correctamente' });
  } catch (error) { manejarError(res, error); }
};

// DELETE /api/usuarios/:id
exports.eliminar = async (req, res) => {
  try {
    const [resultado] = await db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id]);
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) { manejarError(res, error); }
};
