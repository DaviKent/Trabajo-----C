import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function TablaRoles() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [usuario_id, setUsuario_id] = useState("");

    const [rol, setRol] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        TraerDatos();
    }, []);

    async function TraerDatos() {
        let respuesta = await fetch("http://localhost:5000/apiRoles/ver");
        let datos = await respuesta.json();
        setRol(datos.roles);
        console.log(datos);
    }

    async function guardar() {
        let respuesta = await fetch("http://localhost:5000/apiRoles/insertar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre, descripcion: descripcion,usuario_id: usuario_id
            })
        });

        let datos = await respuesta.json();
        console.log("aaaaaaaaaaaa"+datos)
        alert(datos.mensaje);
        TraerDatos()
    }

    function llevarActualizar(id) {
        navigate("/ActualizarRol/" + id);
    }

    async function eliminarRoles(id) {
        let respuesta = await fetch("http://localhost:5000/apiRoles/eliminar/" + id, {
            method: "DELETE"
        });

        let msj = await respuesta.json();
        alert(msj.mensaje);
        TraerDatos();
    }

    return (
        <div>

            <h1>Gestion de roles</h1>

            <div>
                <input type="text" placeholder="Escriba el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Escriba la descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <input type="text" placeholder="Escriba el id del usuario" value={usuario_id} onChange={(e) => setUsuario_id(e.target.value)} />
                <button onClick={guardar}>Guardar</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Rol</th>
                        <th>Descripcion</th>
                        <th>Id Usuarios</th>
                        <th>Actualizar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {rol.map((index) => (
                        <tr>
                            <td>{index.id}</td>
                            <td>{index.nombre}</td>
                            <td>{index.descripcion}</td>
                            <td>{index.usuario_id}</td>
                            <td><button onClick={() => llevarActualizar(index.id)}>Actualizar</button></td>
                            <td><button onClick={() => eliminarRoles(index.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
export default TablaRoles;