let express=require("express")
let PruebaController=require("../controllers/PruebaController");
let router=express.Router();
//crear el objeto que instancia la clase

let controllerp=new PruebaController();
router.get("/prueba",controllerp.pruebita)

module.exports=router