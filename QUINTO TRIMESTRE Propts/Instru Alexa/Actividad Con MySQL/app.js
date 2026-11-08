let express=require("express");
let cors=require("cors");
let mysql=require("mysql2");

const app=express();
const PORT=1350;

app.use(express.json());
app.use(cors());

// conexion BASE DE DATOS DE WORKBENCH
let conectar=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"yalanda15963",
    database:"construccion",
    port:3306
});

// PRUEBA PARA REVISAR O MIRAR SI SE CONECTA
conectar.connect((error)=>{
    if(error){
        console.log("error conexion bd");
    }
    else{
        console.log("conexion realizada");
    }
});

app.get("/prueba",(req,res)=>{
    res.json({"mensaje":"esto es una pruebita"});
});

app.post("/guardar",(req,res)=>{
    const {nombre,apellido,direccion,telefono}=req.body;

    res.json({
        "mensaje":"datos recibidos "+nombre+" "+apellido+" "+direccion+" "+telefono 
    });
});

app.post("/trabajadores",(req,res)=>{
    const {nombre,apellido,direccion,telefono}=req.body;
    conectar.query("INSERT INTO trabajadores (nombre,apellido,direccion,telefono) VALUES (?,?,?,?)",
        [nombre,apellido,direccion,telefono],(error,resultado)=>{
            if(error){
                return res.json({"mensaje":"Error al registrar el trabajador"});
            }
            else{
                return res.json({"mensaje":"Trabajador registrado correctamente"});
            }
        });
});

app.get("/trabajadores",(req,res)=>{
    conectar.query("SELECT * FROM trabajadores",(error,resultados)=>{
        if(error){
            return res.json({"mensaje":"Error al traer los trabajadores"});
        }
        else{
            return res.json(resultados);
        }
    });
});

app.listen(PORT,()=>{
    console.log("Servidor en ejecucion "+PORT);
});