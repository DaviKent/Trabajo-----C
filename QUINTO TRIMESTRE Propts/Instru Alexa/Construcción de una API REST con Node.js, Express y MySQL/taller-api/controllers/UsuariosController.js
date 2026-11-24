const { manejarError, textoValido, idValido } = require('../utils/manejarError');

class UsuariosController {
  constructor(db) {
    this.db = db.promise(); 
  }

  guardar = async (req, res) => {
    try {
      const { nombre, apellido, direccion = null, telefono = null } = req.body || {};

      if (!textoValido(nombre) || !textoValido(apellido)) {
        return res.status(400).json({ ok: false, mensaje: 'nombre y apellido son obligatorios' });
      }

      const [result] = await this.db.query(
        'INSERT INTO usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)',
        [nombre.trim(), apellido.trim(), direccion, telefono]
      );

      res.status(201).json({
        ok: true,
        mensaje: 'Usuario registrado',
        usuario: { id: result.insertId, nombre, apellido, direccion, telefono }
      });
    } catch (error) {
      manejarError(res, error);
    }
  };

  traer = async (req, res) => {
    try {
      const [filas] = await this.db.query('SELECT * FROM usuarios');
      res.json({ ok: true, total: filas.length, usuarios: filas });
    } catch (error) {
      manejarError(res, error);
    }
  };

  buscar = async (req, res) => {
    try {
      const { id } = req.params;
      if (!idValido(id)) return res.status(400).json({ ok: false, mensaje: 'El id debe ser un entero positivo' });

      const [filas] = await this.db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      if (filas.length === 0) return res.status(404).json({ ok: false, mensaje: 'Usuario no encontrado' });

      res.json({ ok: true, usuario: filas[0] });
    } catch (error) {
      manejarError(res, error);
    }
  };

  actualizar = async (req, res) => {
    try {
      const { id } = req.params;
      if (!idValido(id)) return res.status(400).json({ ok: false, mensaje: 'El id debe ser un entero positivo' });

      const { nombre, apellido, direccion = null, telefono = null } = req.body || {};
      if (!textoValido(nombre) || !textoValido(apellido)) {
        return res.status(400).json({ ok: false, mensaje: 'nombre y apellido son obligatorios' });
      }

      const [result] = await this.db.query(
        'UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id = ?',
        [nombre.trim(), apellido.trim(), direccion, telefono, id]
      );
      if (result.affectedRows === 0) return res.status(404).json({ ok: false, mensaje: 'Usuario no encontrado' });

      res.json({ ok: true, mensaje: 'Usuario actualizado', usuario: { id: Number(id), nombre, apellido, direccion, telefono } });
    } catch (error) {
      manejarError(res, error);
    }
  };

  eliminar = async (req, res) => {
    try {
      const { id } = req.params;
      if (!idValido(id)) return res.status(400).json({ ok: false, mensaje: 'El id debe ser un entero positivo' });

      const [result] = await this.db.query('DELETE FROM usuarios WHERE id = ?', [id]);
      if (result.affectedRows === 0) return res.status(404).json({ ok: false, mensaje: 'Usuario no encontrado' });

      res.json({ ok: true, mensaje: 'Usuario eliminado' });
    } catch (error) {
      manejarError(res, error);
    }
  };
}

module.exports = UsuariosController;
