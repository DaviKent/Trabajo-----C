
let conectar = require("../conexion/db");

class RolesController {

    insertar = async (req, res) => {

        let { nombre, descripcion, usuario_id } = req.body;

        let [respuesta] = await conectar.query(
            "SELECT * FROM roles WHERE nombre = ? AND descripcion = ?",
            [nombre, descripcion]
        );

        if (respuesta[0]) {
            return res.json({
                mensaje: "Objeto repetido"
            });
        }

        let [usuario] = await conectar.query(
            "SELECT * FROM Usuarios WHERE id = ?",
            [usuario_id]
        );

        if (!usuario[0]) {
            return res.json({
                mensaje: "El usuario no existe"
            });
        }

        let [resultado] = await conectar.query(
            "INSERT INTO roles(nombre, descripcion, usuario_id) VALUES(?,?,?)",
            [nombre, descripcion, usuario_id]
        );

        res.json({
            mensaje: "Rol registrado correctamente",
            rol: {
                id: resultado.insertId,
                nombre: nombre,
                descripcion: descripcion,
                usuario_id: usuario_id
            }
        });
    }

    ver = async (req, res) => {

        let [respuesta] = await conectar.query(
            "SELECT * FROM roles"
        );

        res.json({
            roles: respuesta
        });
    }

    actualizar = async (req, res) => {

        let id = req.params.id;
        let { nombre, descripcion, usuario_id } = req.body;

        let [respuesta] = await conectar.query(
            "UPDATE roles SET nombre = ?, descripcion = ?, usuario_id = ? WHERE id = ?",
            [nombre, descripcion, usuario_id, id]
        );

        res.json({
            mensaje: respuesta.affectedRows > 0
                ? "Rol actualizado correctamente"
                : "Rol no encontrado",
            rol: respuesta
        });
    }

    eliminar = async (req, res) => {

        let id = req.params.id;

        let [respuesta] = await conectar.query(
            "DELETE FROM roles WHERE id = ?",
            [id]
        );

        res.json({
            mensaje: respuesta.affectedRows > 0
                ? "Rol eliminado correctamente"
                : "Rol no encontrado",
            rol: respuesta
        });
    }
}

module.exports = RolesController;
