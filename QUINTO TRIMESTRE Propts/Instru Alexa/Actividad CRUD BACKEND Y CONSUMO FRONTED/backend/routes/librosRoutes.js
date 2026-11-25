const express = require('express');
const router = express.Router();
const controller = require('../controllers/LibrosController');

router.post('/', controller.registrar);       // Registrar
router.get('/', controller.listar);           // Listar
router.get('/:id', controller.obtener);       // Obtener uno (para el formulario de edición)
router.put('/:id', controller.actualizar);    // Actualizar
router.delete('/:id', controller.eliminar);   // Eliminar

module.exports = router;
