import { useState } from "react"

export default function Regis(){
    const [mensaje,setMensaje]=useState("")

    async function consultarAPI(){
        let resultado=await fetch("http://127.0.0.1:1500/regis")
        let datos=await resultado.json()
        setMensaje(datos)
    }
    return(
        <div>
            <button onClick={consultarAPI}>Consultar registros</button>
            <p>{mensaje}</p>
        </div>
    )
}