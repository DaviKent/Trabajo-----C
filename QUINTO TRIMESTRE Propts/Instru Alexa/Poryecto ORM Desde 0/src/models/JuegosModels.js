let conexion=require("../db/db")
let{ DataTypes }=require('sequelize')
let Personaje=require('./PersonajeModels')
let Juego=conexion.define('Juegos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    precio:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},
{
    tableName:'juegos',
    timestamps:false
}
)

/*Juego.hasMany(Personaje,{
    foreignKey:'id_juego',
    as:'personajes'
})*/
module.exports=Juego
