import { useEffect } from "react";
import { useState } from "react";


function Hooks(){
    const [contador, setContador]=useState(0)
    useEffect(()=>{
        alerta()
    },[contador])

    function alerta(){
        alert("el contador cambio",contador)
    }
    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={()=>setContador(contador+1)}>incrementar</button>
        </div>
    )
}
export default Hooks;