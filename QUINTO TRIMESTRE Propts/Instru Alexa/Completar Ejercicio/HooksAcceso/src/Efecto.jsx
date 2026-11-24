import { useEffect } from "react"

function Efecto(){
    useEffect(()=>{
        alert("El componentr se ha cargado")
    },[])

    return(
        <div>
            <h1>Hook UseEfecct</h1>
        </div>
    )
}

export default Efecto