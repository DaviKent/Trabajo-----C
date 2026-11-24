const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "yalanda15963",
  database: process.env.DB_NAME || "taller_api"
});

db.connect((error) => {
  if (error) {
    console.error("Error de conexión a MySQL:", error.code, "-", error.message);
    return;
  }
  console.log("Conexión establecida");
});

app.use("/prueba", require("./routes/PruebaRoutes"));
app.use("/usuarios", require("./routes/UsuariosRoutes")(db));
app.use("/productos", require("./routes/ProductosRoutes")(db));

app.use((req, res) => {
  res.status(404).json({ ok: false, mensaje: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ ok: false, mensaje: "El JSON enviado está mal formado" });
  }
  console.error(err);
  res.status(500).json({ ok: false, mensaje: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
}).on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`El puerto ${PORT} ya está ocupado. Cierre el otro proceso o cambie el puerto.`);
  } else {
    console.error("Error al iniciar el servidor:", error.message);
  }
});