class GuardarController{
    guardar(req,res){
        const {nombre,edad}=req.body
        res.json({"mensaje":"datos recibidos "+nombre+edad})
    }
}

module.exports=GuardarController