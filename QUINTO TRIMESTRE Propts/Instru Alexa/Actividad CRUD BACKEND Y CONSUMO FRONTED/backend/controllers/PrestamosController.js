const db = require('../conexion/db');
const manejarError = require('./manejarError');

// POST /api/prestamos
exports.registrar = async (req, res) => {
  try {
    const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body;
    if (!usuario_id || !libro_id) return res.status(400).json({ mensaje: 'Debes seleccionar un usuario y un libro' });
    if (!fecha_prestamo) return res.status(400).json({ mensaje: 'La fecha de préstamo es obligatoria' });
    const [resultado] = await db.query(
      `INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado)
       VALUES (?, ?, ?, ?, ?)`,
      [usuario_id, libro_id, fecha_prestamo, fecha_devolucion || null, estado || 'activo']
    );
    res.status(201).json({ mensaje: 'Préstamo registrado correctamente', id: resultado.insertId });
  } catch (error) { manejarError(res, error); }
};

// GET /api/prestamos  -> usa JOIN para traer el nombre del usuario y el título del libro
exports.listar = async (req, res) => {
  try {
    const [filas] = await db.query(
      `SELECT p.id, p.usuario_id, u.nombre AS usuario,
              p.libro_id, l.titulo AS libro,
              p.fecha_prestamo, p.fecha_devolucion, p.estado
       FROM prestamos p
       INNER JOIN usuarios u ON p.usuario_id = u.id
       INNER JOIN libros l   ON p.libro_id = l.id
       ORDER BY p.id DESC`
    );
    res.json(filas);
  } catch (error) { manejarError(res, error); }
};

// GET /api/prestamos/:id
exports.obtener = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM prestamos WHERE id = ?', [req.params.id]);
    if (filas.length === 0) return res.status(404).json({ mensaje: 'Préstamo no encontrado' });
    res.json(filas[0]);
  } catch (error) { manejarError(res, error); }
};

// PUT /api/prestamos/:id
exports.actualizar = async (req, res) => {
  try {
    const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body;
    if (!usuario_id || !libro_id) return res.status(400).json({ mensaje: 'Debes seleccionar un usuario y un libro' });
    if (!fecha_prestamo) return res.status(400).json({ mensaje: 'La fecha de préstamo es obligatoria' });
    const [resultado] = await db.query(
      `UPDATE prestamos SET usuario_id = ?, libro_id = ?, fecha_prestamo = ?, fecha_devolucion = ?, estado = ?
       WHERE id = ?`,
      [usuario_id, libro_id, fecha_prestamo, fecha_devolucion || null, estado || 'activo', req.params.id]
    );
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Préstamo no encontrado' });
    res.json({ mensaje: 'Préstamo actualizado correctamente' });
  } catch (error) { manejarError(res, error); }
};

// DELETE /api/prestamos/:id
exports.eliminar = async (req, res) => {
  try {
    const [resultado] = await db.query('DELETE FROM prestamos WHERE id = ?', [req.params.id]);
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Préstamo no encontrado' });
    res.json({ mensaje: 'Préstamo eliminado correctamente' });
  } catch (error) { manejarError(res, error); }
};
