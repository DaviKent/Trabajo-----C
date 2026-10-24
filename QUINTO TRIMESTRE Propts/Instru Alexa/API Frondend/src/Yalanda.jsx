import { useState } from "react"

function Yalanda(){
    const [mensaje,setMensaje]=useState("")
    async function consumoAPI(){
        let respuesta=await fetch("http://127.0.0.1:4600/Yalanda")
        let datos=await respuesta.json()
        console.log(datos)
        setMensaje(datos.mensaje)
    }
    return(
        <div>
            <p>{mensaje}</p>
            <button onClick={consumoAPI}>Llamar Api</button>
        </div>
    )
}

export default Yalanda