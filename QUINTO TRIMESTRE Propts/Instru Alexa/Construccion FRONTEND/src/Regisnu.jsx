import { useState } from "react"

export default function Regisnu(){
    const [mensaje,setMensaje]=useState("")

    async function registrarAPI(){
        let resultado=await fetch("http://127.0.0.1:1500/regisnu",{
            method:'POST'
        })
        let datos=await resultado.json()
        setMensaje(datos)
    }
    return(
        <div>
            <button onClick={registrarAPI}>Registrar</button>
            <p>{mensaje}</p>
        </div>
    )
}