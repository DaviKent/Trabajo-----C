function Videojuegos() {
    const videojuegos = [
        {
            id: 1,
            nombre: "minecraft",
            plataforma: "pc",
            genero: "sandbox",
            año: 2011
        },
        {
            id: 2,
            nombre: "gta v",
            plataforma: "pc",
            genero: "accion",
            año: 2013
        },
        {
            id: 3,
            nombre: "fortnite",
            plataforma: "pc",
            genero: "battle royale",
            año: 2017
        },
        {
            id: 4,
            nombre: "fifa 24",
            plataforma: "playstation",
            genero: "deportes",
            año: 2023
        },
        {
            id: 5,
            nombre: "zelda breath of the wild",
            plataforma: "nintendo switch",
            genero: "aventura",
            año: 2017
        },
        {
            id: 6,
            nombre: "god of war",
            plataforma: "playstation",
            genero: "accion",
            año: 2018
        },
        {
            id: 7,
            nombre: "halo infinite",
            plataforma: "xbox",
            genero: "disparos",
            año: 2021
        },
        {
            id: 8,
            nombre: "ark",
            plataforma: "pc",
            genero: "supervivencia",
            año: 2017
        }
    ]

    return (
        <div>
            <h1>Tabla de videojuegos</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Plataforma</th>
                        <th>Genero</th>
                        <th>Año</th>
                    </tr>
                </thead>

                <tbody>
                    {videojuegos.map((videojuego) => (
                        <tr key={videojuego.id}>
                            <td>{videojuego.id}</td>
                            <td>{videojuego.nombre}</td>
                            <td>{videojuego.plataforma}</td>
                            <td>{videojuego.genero}</td>
                            <td>{videojuego.año}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Videojuegos