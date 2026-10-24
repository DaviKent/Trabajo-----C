import { useState } from "react"

function Guardar(){
    const [dato_enviado,setDatoEnviado]=useState("")
    const [dato_apellido,setDatoApellido]=useState("")
    const [mensaje,setMensaje]=useState("")
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")

    async function guardarApi(){
        let resultado=await fetch("http://127.0.0.1:4600/guardar",{
            method:'POST',
            body:JSON.stringify({
                nombre:nombre,
                apellido:apellido
            }),
           headers:{
            'Content-Type':'application/json'
           }
        })
        let datos=await resultado.json()
        setDatoEnviado(datos.dato_enviado)
        setDatoApellido(datos.dato_apellido)
        setMensaje(datos.mensaje)
    }
    return(
        <div>
            <input placeholder="nombre" onChange={(e)=>setNombre(e.target.value)}></input>
            <input placeholder="apellido" onChange={(e)=>setApellido(e.target.value)}></input>
            <button onClick={guardarApi}>Aceptar</button>
            <p>{dato_enviado}</p>
            <p>{dato_apellido}</p>
            <p>{mensaje}</p>
        </div>
    )
}

export default Guardar