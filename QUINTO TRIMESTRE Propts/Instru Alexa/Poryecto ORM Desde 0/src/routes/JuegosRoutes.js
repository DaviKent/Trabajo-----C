let express=require('express');
let router=express.Router();
let JuegoController=require('../controllers/JuegosController');


let juegoController=new JuegoController()
router.post('/juego', juegoController.guardar)
router.get('/juego', juegoController.lista)
router.get('/juego/:id', juegoController.buscarId)
router.put('/juego/:id', juegoController.actualizar)
router.delete('/juego/:id', juegoController.eliminar)


module.exports=router