let conexion=require("../db/db")
let { DataTypes } = require('sequelize')
let Juego=require("./JuegosModels")
let Personaje=conexion.define('Personajes',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        id_juego:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        tableName:'personajes',
        timestamps:false
    }
)

/* Personaje.belongsTo(Juego,{
    foreignKey:'id_juego',
    as:'juego'
}
)
*/
module.exports=Personaje