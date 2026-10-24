import { useState } from "react"

export default function Vali(){
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [correo,setCorreo]=useState("")
    const [mensaje,setMensaje]=useState("")

    async function validarApi(){
        let resultado=await fetch("http://127.0.0.1:1500/vali",{
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
        setMensaje(datos.mensaje)
    }
    return(
        <div>
            <input placeholder="nombre" onChange={(e)=>setNombre(e.target.value)}></input>
            <input placeholder="apellido" onChange={(e)=>setApellido(e.target.value)}></input>
            <input placeholder="correo" onChange={(e)=>setCorreo(e.target.value)}></input>
            <button onClick={validarApi}>Validar</button>
            <p>{mensaje}</p>
        </div>
    )
}