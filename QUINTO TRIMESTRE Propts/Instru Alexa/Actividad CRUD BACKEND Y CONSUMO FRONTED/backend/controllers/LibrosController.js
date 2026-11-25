const db = require('../conexion/db');
const manejarError = require('./manejarError');

// POST /api/libros
exports.registrar = async (req, res) => {
  try {
    const { titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id } = req.body;
    if (!titulo || !titulo.trim()) return res.status(400).json({ mensaje: 'El título es obligatorio' });
    if (!autor_id || !categoria_id) return res.status(400).json({ mensaje: 'Debes seleccionar un autor y una categoría' });
    const [resultado] = await db.query(
      `INSERT INTO libros (titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [titulo.trim(), isbn || null, anio_publicacion || null, Number(cantidad) || 0, autor_id, categoria_id]
    );
    res.status(201).json({ mensaje: 'Libro registrado correctamente', id: resultado.insertId });
  } catch (error) { manejarError(res, error); }
};

// GET /api/libros  -> usa JOIN para traer el nombre del autor y de la categoría
exports.listar = async (req, res) => {
  try {
    const [filas] = await db.query(
      `SELECT l.id, l.titulo, l.isbn, l.anio_publicacion, l.cantidad,
              l.autor_id, a.nombre AS autor,
              l.categoria_id, c.nombre AS categoria
       FROM libros l
       INNER JOIN autores a    ON l.autor_id = a.id
       INNER JOIN categorias c ON l.categoria_id = c.id
       ORDER BY l.id DESC`
    );
    res.json(filas);
  } catch (error) { manejarError(res, error); }
};

// GET /api/libros/:id
exports.obtener = async (req, res) => {
  try {
    const [filas] = await db.query('SELECT * FROM libros WHERE id = ?', [req.params.id]);
    if (filas.length === 0) return res.status(404).json({ mensaje: 'Libro no encontrado' });
    res.json(filas[0]);
  } catch (error) { manejarError(res, error); }
};

// PUT /api/libros/:id
exports.actualizar = async (req, res) => {
  try {
    const { titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id } = req.body;
    if (!titulo || !titulo.trim()) return res.status(400).json({ mensaje: 'El título es obligatorio' });
    if (!autor_id || !categoria_id) return res.status(400).json({ mensaje: 'Debes seleccionar un autor y una categoría' });
    const [resultado] = await db.query(
      `UPDATE libros SET titulo = ?, isbn = ?, anio_publicacion = ?, cantidad = ?, autor_id = ?, categoria_id = ?
       WHERE id = ?`,
      [titulo.trim(), isbn || null, anio_publicacion || null, Number(cantidad) || 0, autor_id, categoria_id, req.params.id]
    );
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Libro no encontrado' });
    res.json({ mensaje: 'Libro actualizado correctamente' });
  } catch (error) { manejarError(res, error); }
};

// DELETE /api/libros/:id
exports.eliminar = async (req, res) => {
  try {
    const [resultado] = await db.query('DELETE FROM libros WHERE id = ?', [req.params.id]);
    if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: 'Libro no encontrado' });
    res.json({ mensaje: 'Libro eliminado correctamente' });
  } catch (error) { manejarError(res, error); }
};
