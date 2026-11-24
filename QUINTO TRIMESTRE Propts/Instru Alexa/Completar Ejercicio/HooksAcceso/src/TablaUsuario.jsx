import { useEffect, useState } from "react";
function TablaUsuarios(){
    const [Usuarios,setUsuarios]=useState([])
    useEffect(()=>{
        TraerDatos()
    },[])
    async function TraerDatos(){
        let respuesta =await fetch("http://localhost:5000/apiRegistrar/usuario")
        let datos=await respuesta.json();
        setUsuarios(datos.usuario)
        console.log(datos)

    }
    return(
        <div>
            <h1>Gestion de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Usuario</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>telefono</th>
                        <th>correo</th>
                    </tr>
                </thead>
                <tbody>
                   {Usuarios.map((index)=>(
                    <tr>
                        <td>{index.id}</td>
                        <td>{index.nombre}</td>
                        <td>{index.apellido}</td>
                        <td>{index.direccion}</td>
                        <td>{index.telefono}</td>
                        <td>{index.correo}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </div>
    )
}
export default TablaUsuarios