import { useState } from "react"

export default function Middleware(){
    const [mensaje,setMensaje]=useState("")

    async function consultarAPI(){
        let resultado=await fetch("http://127.0.0.1:1500/inicio")
        let datos=await resultado.json()
        setMensaje(datos.mensaje)
    }
    return(
        <div>
            <button onClick={consultarAPI}>Llamar mi API</button>
            <p>{mensaje}</p>
        </div>
    )
}