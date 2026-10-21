//import export let=
const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json())

app.get('/cris',(req,res)=>{
    res.json({"mensaje":"Hola, esta es una pruebita"})
});

app.get('/yal',(req,res)=>{
    res.json({"Hola" : "Mundito"})
});

app.post('/guardar',(req,res)=>{
    const {nombre, apellido}=req.body
    res.json({
        "dato_enviado":nombre,
        "dato_apellido":apellido,
        "mensaje":"esto es una pruebita"
    })
});

/* Puerto */
app.listen(PORT,()=>{
    console.log("servidor ejecutandose correctamente " + PORT)
})