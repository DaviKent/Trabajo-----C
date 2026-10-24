import { useState } from "react"

function David(){
    const [hola,setHola]=useState("")
    async function consumoAPI(){
        let res=await fetch("http://127.0.0.1:4600/David")
        let data=await res.json()
        console.log(data)
        setHola(data.Hola)
    }
    return(
        <div>
            <p>{hola}</p>
            <button onClick={consumoAPI}>API</button>
        </div>
    )
}

export default David