let Juego=require('../models/JuegosModels')

class JuegoController{
    guardar=async(req, res)=>{
        let {nombre,precio}=req.body
        // Funcion sequalize create=> insert into nombre table (campos)
        // values
        let respuesta=await Juego.create({nombre,precio})
        return res.json({
            mensaje:"juego registrado correctamente"
        })
    }  
    lista=async (req,res)=>{
        let resp=await Juego.findAll()
        return res.json({
            respuesta:resp
        })
    }
    buscarId=async (req,res)=>{
        let {id}=req.params
        let busca=await Juego.findByPk()
        return res.json({
            respuesta:busca
        })
    }
    actualizar=async (req,res)=>{
        let id=req.params.id
        let {nombre,precio}=req.body
        let busca=await Juego.findByPk(id)
        if (busca){
            await busca.update({
                nombre,
                precio
            })
            return res.json({
                mensaje:"elemento actualizado",
                registro:busca
            })
        }
    }
    eliminar=async(req,res)=>{
        let id=req.params.id
        let busca=await Juego.findByPk(id)
        if (busca){
            await busca.destroy()

            return res.json({
                mensaje:"elemento eliminado"
            })
        }
    }
}

module.exports=JuegoController