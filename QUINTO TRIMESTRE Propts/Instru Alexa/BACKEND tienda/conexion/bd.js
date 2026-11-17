
let mysql = require("mysql2");

let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "yalanda15963",
    database: "tienda",
    port:3306
});

conectar.connect((error) => {
    if (error) {
        console.log("error conexion bd: " + error.message);
    } else {
        console.log("conexion realizada");
    }
});

module.exports = conectar;
