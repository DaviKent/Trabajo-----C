let express=require('express');
let router=express.Router();
let PersonajeController=require('../controllers/PersonajeController');

let personajeController=new PersonajeController();

router.post('/personaje', personajeController.guardar);
router.get('/personaje', personajeController.lista);
router.get('/personaje/:id', personajeController.buscarId);
router.put('/personaje/:id', personajeController.actualizar);
router.delete('/personaje/:id', personajeController.eliminar);

module.exports=router;