let mysql=require("mysql2");

// conexion BASE DE DATOS DE WORCKBENCH
let conectar=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"yalanda15963",
    database:"ejemplo",
    port:3306
})

// PRUEBA PARA REVISAR O MIRAR SI SE CONECTA
conectar.connect((error)=>{
    if(error){
        console.log("error conexion bd")
    }
    else{
        console.log("conexion realizada")
    }
})

module.exports=conectar