let conectar = require("../conexion/bd");

class ProductosController {
    traer = (req, res) => {
        conectar.query("SELECT * FROM producto ORDER BY id", (error, resultados) => {
            if (error) {
                return res.status(500).json({ mensaje: "Error al traer los productos" });
            }
            return res.status(200).json(resultados);
        });
    };

    guardar = (req, res) => {
        const { nombre, categoria, precio, cantidad } = req.body;

        // Validación antes de guardar
        if (!nombre || !nombre.trim()) {
            return res.status(400).json({ mensaje: "El nombre es obligatorio" });
        }
        const precioNum = Number(precio);
        const cantidadNum = Number(cantidad);
        if (precio === "" || isNaN(precioNum) || precioNum < 0) {
            return res.status(400).json({ mensaje: "El precio debe ser un número mayor o igual a 0" });
        }
        if (!Number.isInteger(cantidadNum) || cantidadNum < 0) {
            return res.status(400).json({ mensaje: "La cantidad debe ser un entero mayor o igual a 0" });
        }

        // Consulta parametrizada (los ? evitan la inyección SQL)
        conectar.query(
            "INSERT INTO producto (nombre, categoria, precio, cantidad) VALUES (?,?,?,?)",
            [nombre.trim(), (categoria || "").trim() || null, precioNum, cantidadNum],
            (error, resultado) => {
                if (error) {
                    return res.status(500).json({ mensaje: "Error al registrar el producto" });
                }
                return res.status(201).json({ mensaje: "Producto registrado correctamente", id: resultado.insertId });
            }
        );
    };
}

module.exports = ProductosController;
