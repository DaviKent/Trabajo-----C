function Peliculas() {
    const peliculas = [
        {
            id: 1,
            titulo: "Avengers Endgame",
            director: "Anthony Russo",
            genero: "Accion",
            año: 2019,
            duracion: 181
        },
        {
            id: 2,
            titulo: "Titanic",
            director: "James Cameron",
            genero: "Romance",
            año: 1997,
            duracion: 195
        },
        {
            id: 3,
            titulo: "Avatar",
            director: "James Cameron",
            genero: "Ciencia ficcion",
            año: 2009,
            duracion: 162
        },
        {
            id: 4,
            titulo: "Joker",
            director: "Todd Phillips",
            genero: "Drama",
            año: 2019,
            duracion: 122
        },
        {
            id: 5,
            titulo: "Toy Story",
            director: "John Lasseter",
            genero: "Animacion",
            año: 1995,
            duracion: 81
        },
        {
            id: 6,
            titulo: "Spider-Man No Way Home",
            director: "Jon Watts",
            genero: "Accion",
            año: 2021,
            duracion: 148
        },
        {
            id: 7,
            titulo: "The Batman",
            director: "Matt Reeves",
            genero: "Accion",
            año: 2022,
            duracion: 176
        },
        {
            id: 8,
            titulo: "Interstellar",
            director: "Christopher Nolan",
            genero: "Ciencia ficcion",
            año: 2014,
            duracion: 169
        },
        {
            id: 9,
            titulo: "Coco",
            director: "Lee Unkrich",
            genero: "Animacion",
            año: 2017,
            duracion: 105
        },
        {
            id: 10,
            titulo: "Jurassic Park",
            director: "Steven Spielberg",
            genero: "Aventura",
            año: 1993,
            duracion: 127
        }
    ]

    return (
        <div>
            <h1>Catalogo de peliculas</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Director</th>
                        <th>Genero</th>
                        <th>Año</th>
                        <th>Duracion</th>
                    </tr>
                </thead>

                <tbody>
                    {peliculas.map((pelicula) => (
                        <tr key={pelicula.id}>
                            <td>{pelicula.id}</td>
                            <td>{pelicula.titulo}</td>
                            <td>{pelicula.director}</td>
                            <td>{pelicula.genero}</td>
                            <td>{pelicula.año}</td>
                            <td>{pelicula.duracion} minutos</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Peliculas