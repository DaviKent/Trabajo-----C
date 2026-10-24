//import export let=
const express=require("express");
const cors=require("cors");
const app=express();
const PORT=4600;
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))

app.get('/Yalanda',(req,res)=>{
    res.json({"mensaje":"Hola, esta es una pruebita"})
});

app.get('/David',(req,res)=>{
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