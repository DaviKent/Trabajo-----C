const { manejarError, textoValido, idValido } = require('../utils/manejarError');

class ProductosController {
  constructor(db) {
    this.db = db.promise();
  }

  
  validar(body) {
    const { nombre, descripcion, precio, stock } = body || {};

    if (!textoValido(nombre)) return 'El nombre es obligatorio';
    if (descripcion !== undefined && descripcion !== null && typeof descripcion !== 'string') {
      return 'La descripción debe ser texto';
    }
    if (typeof precio !== 'number' || !Number.isFinite(precio)) return 'El precio debe ser un número';
    if (precio < 0) return 'El precio no puede ser negativo';
    if (typeof stock !== 'number' || !Number.isInteger(stock)) return 'El stock debe ser un número entero';
    if (stock < 0) return 'El stock no puede ser negativo';
    return null;
  }

  guardar = async (req, res) => {
    try {
      const errorValidacion = this.validar(req.body);
      if (errorValidacion) return res.status(400).json({ ok: false, mensaje: errorValidacion });

      const { nombre, descripcion = null, precio, stock } = req.body;
      const [result] = await this.db.query(
        'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)',
        [nombre.trim(), descripcion, precio, stock]
      );

      res.status(201).json({ ok: true, mensaje: 'Producto registrado', producto: { id: result.insertId, nombre, descripcion, precio, stock } });
    } catch (error) {
      manejarError(res, error);
    }
  };

  traer = async (req, res) => {
    try {
      const [filas] = await this.db.query('SELECT * FROM productos');
      res.json({ ok: true, total: filas.length, productos: filas });
    } catch (error) {
      manejarError(res, error);
    }
  };

  buscar = async (req, res) => {
    try {
      const { id } = req.params;
      if (!idValido(id)) return res.status(400).json({ ok: false, mensaje: 'El id debe ser un entero positivo' });

      const [filas] = await this.db.query('SELECT * FROM productos WHERE id = ?', [id]);
      if (filas.length === 0) return res.status(404).json({ ok: false, mensaje: 'Producto no encontrado' });

      res.json({ ok: true, producto: filas[0] });
    } catch (error) {
      manejarError(res, error);
    }
  };

  actualizar = async (req, res) => {
    try {
      const { id } = req.params;
      if (!idValido(id)) return res.status(400).json({ ok: false, mensaje: 'El id debe ser un entero positivo' });

      const errorValidacion = this.validar(req.body);
      if (errorValidacion) return res.status(400).json({ ok: false, mensaje: errorValidacion });

      const { nombre, descripcion = null, precio, stock } = req.body;
      const [result] = await this.db.query(
        'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?',
        [nombre.trim(), descripcion, precio, stock, id]
      );
      if (result.affectedRows === 0) return res.status(404).json({ ok: false, mensaje: 'Producto no encontrado' });

      res.json({ ok: true, mensaje: 'Producto actualizado', producto: { id: Number(id), nombre, descripcion, precio, stock } });
    } catch (error) {
      manejarError(res, error);
    }
  };

  eliminar = async (req, res) => {
    try {
      const { id } = req.params;
      if (!idValido(id)) return res.status(400).json({ ok: false, mensaje: 'El id debe ser un entero positivo' });

      const [result] = await this.db.query('DELETE FROM productos WHERE id = ?', [id]);
      if (result.affectedRows === 0) return res.status(404).json({ ok: false, mensaje: 'Producto no encontrado' });

      res.json({ ok: true, mensaje: 'Producto eliminado' });
    } catch (error) {
      manejarError(res, error);
    }
  };

  agotados = async (req, res) => {
    try {
      const [filas] = await this.db.query('SELECT * FROM productos WHERE stock = 0');
      res.json({ ok: true, total: filas.length, productos: filas });
    } catch (error) {
      manejarError(res, error);
    }
  };

  bajoStock = async (req, res) => {
    try {
      const [filas] = await this.db.query('SELECT * FROM productos WHERE stock < 5');
      res.json({ ok: true, total: filas.length, productos: filas });
    } catch (error) {
      manejarError(res, error);
    }
  };
}

module.exports = ProductosController;
