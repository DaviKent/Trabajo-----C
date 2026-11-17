let conectar=require("../conexion/bd")

class UsuariosController{
    traer=()=>{
            conectar.query("SELECT * FROM usuarios", (error,resultados)=>{
        if (error){
            return res.json({"mensaje":"Error al traer los datos del usuario"})
        }
        else{
            return res.json(resultados)
        }
    })
    }
    guardar=(req,res)=>{
    const {nombre,apellido,direccion,telefono}=req.body
    conectar.query("INSERT INTO usuarios (nombre,apellido,direccion,telefono) VALUES (?,?,?,?)",
        [nombre,apellido,direccion,telefono],(error,resultado)=>{
            if(error){
                return res.json({"mensaje":"Error al registrar el usuario"})
            }
            else{
                return res.json({"mensaje":"Usuario registrado correctamente"})
            }
        })
    }
}

module.exports=UsuariosController