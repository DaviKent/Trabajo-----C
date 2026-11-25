
let Personaje=require('../models/PersonajeModels')

class PersonajeController{
    guardar=async(req,res)=>{
        let {nombre,id_juego}=req.body

        let respuesta=await Personaje.create({nombre,id_juego})

        return res.json({
            mensaje:"personaje registrado correctamente"
        })
    }

    lista=async(req,res)=>{
        let respuesta=await Personaje.findAll()

        return res.json({
            respuesta:respuesta
        })
    }

    buscarId=async(req,res)=>{
        let {id}=req.params

        let busca=await Personaje.findByPk(id)

        return res.json({
            respuesta:busca
        })
    }

    actualizar=async(req,res)=>{
        let {id}=req.params
        let {nombre,id_juego}=req.body

        let respuesta=await Personaje.update(
            {nombre,id_juego},
            {where:{id:id}}
        )

        return res.json({
            mensaje:"personaje actualizado correctamente",
            respuesta:respuesta
        })
    }

    eliminar=async(req,res)=>{
        let {id}=req.params

        let respuesta=await Personaje.destroy({
            where:{id:id}
        })

        return res.json({
            mensaje:"personaje eliminado correctamente",
            respuesta:respuesta
        })
    }
}

module.exports=PersonajeController
