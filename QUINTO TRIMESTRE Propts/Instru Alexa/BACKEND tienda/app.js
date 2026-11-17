let express = require("express");
let cors = require("cors");

let routeProductos = require("./routes/ProductosRoute");

const app = express();
const PORT = process.env.PORT || 1450;

app.use(express.json());
app.use(cors());

app.use("/apiProductos", routeProductos);

app.listen(PORT, () => {
    console.log("Servidor en ejecucion " + PORT);
});
