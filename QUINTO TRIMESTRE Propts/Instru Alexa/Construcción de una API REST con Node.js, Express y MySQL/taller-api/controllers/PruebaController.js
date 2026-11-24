class PruebaController {
  
  bienvenida = (req, res) => {
    res.json({ ok: true, mensaje: '¡Bienvenido a la API del taller!' });
  };

  verificar = (req, res) => {
    res.json({ ok: true, mensaje: 'El servidor está funcionando correctamente', estado: true });
  };

  recibir = (req, res) => {
    if (!req || !req.body) {
      return res.status(400).json({ ok: false, mensaje: 'No se recibió cuerpo en la petición (¿falta express.json() o el JSON?)' });
    }
    const { nombre, edad } = req.body;

    if (nombre === undefined || edad === undefined) {
      return res.status(400).json({ ok: false, mensaje: 'Los campos nombre y edad son obligatorios' });
    }
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      return res.status(400).json({ ok: false, mensaje: 'nombre debe ser un texto no vacío' });
    }
    if (typeof edad !== 'number' || !Number.isInteger(edad) || edad < 0) {
      return res.status(400).json({ ok: false, mensaje: 'edad debe ser un número entero mayor o igual a 0' });
    }

    res.json({ ok: true, mensaje: 'Datos recibidos', datos: { nombre, edad } });
  };

  sumar = (req, res) => {
    if (!req || !req.body) {
      return res.status(400).json({ ok: false, mensaje: 'No se recibió cuerpo en la petición' });
    }
    const { numero1, numero2 } = req.body;

    if (numero1 === undefined || numero2 === undefined) {
      return res.status(400).json({ ok: false, mensaje: 'numero1 y numero2 son obligatorios' });
    }
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number' || !Number.isFinite(numero1) || !Number.isFinite(numero2)) {
      return res.status(400).json({ ok: false, mensaje: 'numero1 y numero2 deben ser números (no texto)' });
    }

    res.json({ resultado: numero1 + numero2 });
  };
}

module.exports = PruebaController;
