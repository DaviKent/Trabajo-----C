function Jugadores() {
    const jugadores = [
        {
            numero: 1,
            nombre: "David",
            apellido: "Ospina",
            posicion: "Portero",
            edad: 37
        },
        {
            numero: 2,
            nombre: "Daniel",
            apellido: "Munoz",
            posicion: "Defensa",
            edad: 29
        },
        {
            numero: 3,
            nombre: "Yerry",
            apellido: "Mina",
            posicion: "Defensa",
            edad: 31
        },
        {
            numero: 4,
            nombre: "Davinson",
            apellido: "Sanchez",
            posicion: "Defensa",
            edad: 30
        },
        {
            numero: 5,
            nombre: "Jefferson",
            apellido: "Lerma",
            posicion: "Mediocampista",
            edad: 31
        },
        {
            numero: 6,
            nombre: "Richard",
            apellido: "Rios",
            posicion: "Mediocampista",
            edad: 26
        },
        {
            numero: 7,
            nombre: "Luis",
            apellido: "Diaz",
            posicion: "Delantero",
            edad: 29
        },
        {
            numero: 8,
            nombre: "James",
            apellido: "Rodriguez",
            posicion: "Mediocampista",
            edad: 35
        },
        {
            numero: 9,
            nombre: "Jhon",
            apellido: "Cordoba",
            posicion: "Delantero",
            edad: 33
        },
        {
            numero: 10,
            nombre: "Juan",
            apellido: "Quintero",
            posicion: "Mediocampista",
            edad: 33
        },
        {
            numero: 11,
            nombre: "Jhon",
            apellido: "Arias",
            posicion: "Delantero",
            edad: 28
        }
    ]

    return (
        <div>
            <h1>Equipo de futbol</h1>

            <table>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Posicion</th>
                        <th>Edad</th>
                    </tr>
                </thead>

                <tbody>
                    {jugadores.map((jugador) => (
                        <tr key={jugador.numero}>
                            <td>{jugador.numero}</td>
                            <td>{jugador.nombre}</td>
                            <td>{jugador.apellido}</td>
                            <td>{jugador.posicion}</td>
                            <td>{jugador.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Jugadores