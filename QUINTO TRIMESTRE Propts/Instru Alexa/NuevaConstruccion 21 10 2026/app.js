const express = require('express');
const app = express();
const PORT = 1500;
app.use(express.json());

/* punto 8: middleware */
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

/* punto 3 */
app.get('/inicio', (req, res) => {
    res.json({ mensaje: "Bienvenido de vuelta" });
});

/* punto 4 */
app.get('/info', (req, res) => {
    res.json({
        servicios: "Software",
        version: "1.0",
        descripcion: "Proporciona datos"
    });
});

/* punto 5 */
app.post('/soli',(req,res)=>{
    const { nombre, apellido, correo } = req.body
    res.json({
        "dato_nombre": nombre,
        "dato_apellido": apellido,
        "dato_correo": correo
    });
});

/* puntos 6 y 7 */
app.post('/validar', (req, res) => {
    const { nombre, apellido, correo } = req.body;

    if (!nombre || !apellido || !correo) {
        return res.status(400).json({
            mensaje: "Completa los campos"
        });
    }
    else if (!correo.includes("@") || !correo.includes(".")) {
        return res.status(400).json({
            mensaje: "Correo no valido"
        });
    }
    else {
        res.json({
            dato_nombre: nombre,
            dato_apellido: apellido,
            dato_correo: correo
        });
    }
});

/* puntos 7 */
app.post('/vali',(req,res)=>{
    const { nombre,apellido,correo}=req.body;

    if (nombre =="" || apellido =="" || correo ==""){
        res.status(400).json({
            mensaje: "Completa los campos"
        });
    }
    else if (!correo.includes("@") || !correo.includes(".")){
        res.status(400).json({
            mensaje: "Correo no valido"
        });
    }
    else{
        res.json({
            mensaje: "Solicitud recibida"
        });
    }
});

/* ejercicio 5: middleware propio */
app.get('/regis',(req,res)=>{
    res.json("Consulta de registros realizada");
});

app.post('/regisnu',(req,res)=>{
    res.json("Registro recibido correctamente");
});

/* punto 10: ruta no encontrada */
app.use((req,res)=>{
    res.status(404).json({
        mensaje: "Ruta no encontrada"
    });
});

/* puerto */
app.listen(PORT,()=>{
    console.log("Servidor ejecutandose correctamente " + PORT);
});