import { useState } from "react"

export default function Error404(){
    const [mensaje,setMensaje]=useState("")

    async function consultarAPI(){
        let resultado=await fetch("http://127.0.0.1:1500/error")
        let datos=await resultado.json()
        setMensaje(datos.mensaje)
    }
    return(
        <div>
            <button onClick={consultarAPI}>Consultar ruta</button>
            <p>{mensaje}</p>
        </div>
    )
}