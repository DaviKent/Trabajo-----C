// Traduce los errores de MySQL a respuestas HTTP claras
module.exports = (res, error) => {
  console.error(error);
  switch (error.code) {
    case 'ER_DUP_ENTRY':
      return res.status(409).json({ mensaje: 'Ya existe un registro con ese valor único (correo, ISBN o nombre)' });
    case 'ER_NO_REFERENCED_ROW_2':
      return res.status(400).json({ mensaje: 'El registro relacionado (autor, categoría, usuario o libro) no existe' });
    case 'ER_ROW_IS_REFERENCED_2':
      return res.status(409).json({ mensaje: 'No se puede eliminar: tiene registros relacionados' });
    case 'ER_TRUNCATED_WRONG_VALUE':
    case 'ER_WRONG_VALUE_FOR_TYPE':
      return res.status(400).json({ mensaje: 'Alguno de los datos enviados tiene un formato inválido' });
    default:
      return res.status(500).json({ mensaje: 'Error en el servidor', detalle: error.message });
  }
};
