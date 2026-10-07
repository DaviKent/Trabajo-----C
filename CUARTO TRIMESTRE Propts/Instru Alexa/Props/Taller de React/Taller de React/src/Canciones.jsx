function Canciones() {
    const canciones = [
        {
            id: 1,
            titulo: "despacito",
            artista: "luis fonsi",
            album: "vida",
            año: 2017
        },
        {
            id: 2,
            titulo: "shape of you",
            artista: "ed sheeran",
            album: "divide",
            año: 2017
        },
        {
            id: 3,
            titulo: "blinding lights",
            artista: "the weeknd",
            album: "after hours",
            año: 2020
        },
        {
            id: 4,
            titulo: "believer",
            artista: "imagine dragons",
            album: "evolve",
            año: 2017
        },
        {
            id: 5,
            titulo: "bad guy",
            artista: "billie eilish",
            album: "when we all fall asleep",
            año: 2019
        },
        {
            id: 6,
            titulo: "havana",
            artista: "camila cabello",
            album: "camila",
            año: 2017
        },
        {
            id: 7,
            titulo: "perfect",
            artista: "ed sheeran",
            album: "divide",
            año: 2017
        },
        {
            id: 8,
            titulo: "watermelon sugar",
            artista: "harry styles",
            album: "fine line",
            año: 2019
        }
    ]

    return (
        <div>
            <h1>Tabla de canciones</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Artista</th>
                        <th>Album</th>
                        <th>Año</th>
                    </tr>
                </thead>

                <tbody>
                    {canciones.map((cancion) => (
                        <tr key={cancion.id}>
                            <td>{cancion.id}</td>
                            <td>{cancion.titulo}</td>
                            <td>{cancion.artista}</td>
                            <td>{cancion.album}</td>
                            <td>{cancion.año}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Canciones