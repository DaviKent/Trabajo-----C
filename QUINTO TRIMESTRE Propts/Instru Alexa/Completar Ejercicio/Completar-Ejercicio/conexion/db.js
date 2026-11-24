const mysql = require("mysql2");

let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "yalanda15963",
    database: "acceso",
    port: 3306
});

module.exports = conectar.promise();