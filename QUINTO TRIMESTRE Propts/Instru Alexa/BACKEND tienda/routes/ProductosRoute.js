let express = require("express");
let ProductosController = require("../controllers/ProductosController");

let routeProductos = express.Router();
let productos = new ProductosController();

routeProductos.get("/productos", productos.traer);
routeProductos.post("/productos", productos.guardar);

module.exports = routeProductos;
