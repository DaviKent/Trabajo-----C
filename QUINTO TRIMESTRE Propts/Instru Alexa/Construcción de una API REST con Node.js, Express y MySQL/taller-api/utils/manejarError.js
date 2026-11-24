// Traduce errores de MySQL/Node a respuestas HTTP claras.
function manejarError(res, error) {
  console.error(`[${error.code || 'ERROR'}]`, error.message);

  switch (error.code) {
    case 'ECONNREFUSED':
    case 'PROTOCOL_CONNECTION_LOST':
    case 'ETIMEDOUT':
    case 'ER_CON_COUNT_ERROR':
      return res.status(503).json({ ok: false, mensaje: 'No hay conexión con la base de datos' });
    case 'ER_NO_SUCH_TABLE':
      return res.status(500).json({ ok: false, mensaje: 'La tabla consultada no existe', codigo: error.code });
    case 'ER_BAD_NULL_ERROR':
      return res.status(400).json({ ok: false, mensaje: 'Se envió NULL a una columna obligatoria', codigo: error.code });
    case 'ER_BAD_FIELD_ERROR':
      return res.status(500).json({ ok: false, mensaje: 'Columna inexistente en la consulta', codigo: error.code });
    case 'ER_PARSE_ERROR':
      return res.status(500).json({ ok: false, mensaje: 'Error de sintaxis SQL', codigo: error.code });
    default:
      return res.status(500).json({ ok: false, mensaje: 'Error interno del servidor' });
  }
}

const textoValido = (v) => typeof v === 'string' && v.trim() !== '';
const idValido = (id) => /^\d+$/.test(String(id)) && Number(id) > 0;

module.exports = { manejarError, textoValido, idValido };
