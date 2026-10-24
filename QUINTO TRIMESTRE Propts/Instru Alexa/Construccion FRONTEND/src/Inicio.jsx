import { useState } from "react"


export default function Inicio(){
    const [mensaje,setMensaje]=useState("")
    async function consumoAPI(){
        let respuesta=await fetch("http://127.0.0.1:1500/inicio")
        let datos=await respuesta.json()
        console.log(datos)
        setMensaje(datos.mensaje)
    }
    return(
        <div>
            <p>{mensaje}</p>
            <button onClick={consumoAPI}>Llamo mi API</button>
        </div>
    )
}