import { useState } from "react"

export default function Info(){
    const [datos,setDatos]=useState({})
    async function consumoAPI(){
        let respuesta=await fetch("http://127.0.0.1:1500/info")
        let datos=await respuesta.json()
        console.log(datos)
        setDatos(datos)
    }
    return(
        <div>
            <p>{datos.servicios}</p>
            <p>{datos.version}</p>
            <p>{datos.descripcion}</p>
            <button onClick={consumoAPI}>Consultar informacion</button>
        </div>
    )
}