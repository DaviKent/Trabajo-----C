let express=require("express");
let cors=require("cors");

let router=require("./routes/PruebaRoutes");
let rutaGuardar=require("./routes/GuardarRoutes");
let routeUsuarios=require("./routes/UsuariosRoute")

const app=express();
const PORT=1450

app.use(express.json())
app.use(cors())


app.use("/api",router)
app.use("appiGuardar",rutaGuardar)
app.use("apiUser",routeUsuarios)


app.listen(PORT, ()=>{
    console.log("Servidor en ejecucion " + PORT)
})

//Actividad : construir el proyecto desde 0, comprobacion + una tambla 
//con diferentes datos, construirla y que registre