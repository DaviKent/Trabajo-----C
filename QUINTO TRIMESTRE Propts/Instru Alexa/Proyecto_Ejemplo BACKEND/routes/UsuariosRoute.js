let express=require("express")
let UsuariosController=require("../controllers/UsuariosController")

let routeUsuarios=express.Router()

let usuarios=new UsuariosController()
routeUsuarios.get("/usuarios",usuarios.traer.bind())
routeUsuarios.post("/usuarios",usuarios.guardar.bind())

module.exports=routeUsuarios