let express=require("express");
let cors=require("cors");
let mysql=require("mysql2");

const app=express();
const PORT=1450

app.use(express.json())
app.use(cors())

// conexion BASE DE DATOS DE WORCKBENCH
let conectar=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"senaCTPI",
    database:"ejemplo",
    port:3306
})

// PRUEBA PARA REVISAR O MIRAR SI SE CONECTA
conectar.connect((error)=>{
    if(error){
        console.log("error conexion bd")
    }
    else{
        console.log("conexion realizada")
    }
})

app.get("/prueba",(req,res)=>{
    res.json({"mensaje":"esto es una pruebita"})
})

app.post("/guardar",(req,res)=>{
    const {nombre,edad}=req.body
    res.json({"mensaje":"datos recibidos "+ nombre + edad})
})

app.post("/usuarios",(req,res)=>{
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
})

app.get("/usuarios",(req,res)=>{
    conectar.query("SELECT * FROM usuarios", (error,resultados)=>{
        if (error){
            return res.json({"mensaje":"Error al traer los datos del usuario"})
        }
        else{
            return res.json(resultados)
        }
    })
})

app.listen(PORT, ()=>{
    console.log("Servidor en ejecucion " + PORT)
})

//Actividad : construir el proyecto desde 0, comprobacion + una tambla 
//con diferentes datos, construirla y que registre