
import { useParams } from "react-router-dom"
import { useState } from "react"

function ActualizarRol(){
    const [nombre,setNombre]=useState("")
    const [descripcion,setDescripcion]=useState("")
    const [usuario_id, setUsuario_id] = useState("");

    let {id}=useParams()

    async function Actualizar(){
        alert(id)

        let respuesta=await fetch("http://localhost:5000/apiRoles/actualizar/" + id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre:nombre,
                descripcion:descripcion,
                usuario_id:usuario_id
            })
        })

        let res=await respuesta.json()
        alert(res.mensaje)
    }

    return(
        <div>
            <h1>Actualizar Rol</h1>
            <div>
                <input type="text" placeholder="Escriba el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Escriba la descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <input type="text" placeholder="Escriba el id del usuario" value={usuario_id} onChange={(e) => setUsuario_id(e.target.value)} />
                <button onClick={Actualizar}>guardar</button>
            </div>
        </div>
    )
}

export default ActualizarRol
