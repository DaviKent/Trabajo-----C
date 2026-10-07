function PaginaFinal() {
    const titulo = "catalogo de videojuegos"
    const descripcion = "una pequeña pagina con informacion sobre diferentes videojuegos"
    const categoria = "videojuegos"

    const videojuegos = [
        {
            id: 1,
            nombre: "Minecraft",
            plataforma: "PC",
            genero: "Supervivencia"
        },
        {
            id: 2,
            nombre: "GTA V",
            plataforma: "PC",
            genero: "Accion"
        },
        {
            id: 3,
            nombre: "Fortnite",
            plataforma: "PC",
            genero: "Battle Royale"
        },
        {
            id: 4,
            nombre: "FIFA 24",
            plataforma: "PlayStation",
            genero: "Deportes"
        },
        {
            id: 5,
            nombre: "God of War",
            plataforma: "PlayStation",
            genero: "Accion"
        },
        {
            id: 6,
            nombre: "Halo Infinite",
            plataforma: "Xbox",
            genero: "Disparos"
        },
        {
            id: 7,
            nombre: "ARK",
            plataforma: "PC",
            genero: "Supervivencia"
        },
        {
            id: 8,
            nombre: "Mario Kart",
            plataforma: "Nintendo Switch",
            genero: "Carreras"
        }
    ]

    return (
        <div>
            <h1>{titulo}</h1>

            <section>
                <h2>Informacion principal</h2>
                <p>{descripcion}</p>
                <p>Categoria: {categoria}</p>
            </section>

            <section>
                <h2>Lista de videojuegos</h2>

                <ul>
                    {videojuegos.map((videojuego) => (
                        <li key={videojuego.id}>
                            {videojuego.nombre}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Informacion de los videojuegos</h2>

                {videojuegos.map((videojuego) => (
                    <div key={videojuego.id}>
                        <h2>{videojuego.nombre}</h2>
                        <p>Plataforma: {videojuego.plataforma}</p>
                        <p>Genero: {videojuego.genero}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default PaginaFinal