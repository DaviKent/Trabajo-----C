import { useState } from "react"

export default function Soli(){
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [correo,setCorreo]=useState("")
    const [mensaje,setMensaje]=useState("")

    async function guardarApi(){
        let resultado=await fetch("http://127.0.0.1:1500/soli",{
            method:'POST',
            body:JSON.stringify({
                nombre:nombre,
                apellido:apellido,
                correo:correo
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let datos=await resultado.json()
        setNombre(datos.dato_nombre)
        setApellido(datos.dato_apellido)
        setCorreo(datos.dato_correo)
        setMensaje(datos.dato_nombre+" "+datos.dato_apellido+" "+datos.dato_correo)
    }
    return(
        <div>
            <input placeholder="nombre" onChange={(e)=>setNombre(e.target.value)}></input>
            <input placeholder="apellido" onChange={(e)=>setApellido(e.target.value)}></input>
            <input placeholder="correo" onChange={(e)=>setCorreo(e.target.value)}></input>
            <button onClick={guardarApi}>Aceptar</button>
            <p>{mensaje}</p>
        </div>
    )
}