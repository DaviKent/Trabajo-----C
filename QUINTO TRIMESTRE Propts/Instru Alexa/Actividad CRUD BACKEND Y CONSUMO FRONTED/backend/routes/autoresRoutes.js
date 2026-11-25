const express = require('express');
const router = express.Router();
const controller = require('../controllers/AutoresController');

router.post('/', controller.registrar);
router.get('/', controller.listar);
router.get('/:id', controller.obtener);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

module.exports = router;
