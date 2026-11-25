const express = require("express");
const cors = require("cors");
let router=require("./src/routes/JuegosRoutes")
let routerPersonaje=require("./src/routes/PersonajesRoutes")
let conexion=require("./src/db/db")
require('dotenv').config();
PORT=process.env.PORT

let app=express()
app.use(express.json());
app.use(cors());

app.use("/api", router)
app.use("/api",routerPersonaje);

app.listen(PORT, () => {
    console.log("Servidor inicializado "+PORT);
});

