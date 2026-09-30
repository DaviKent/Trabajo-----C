function Libro() {
    const libro = {
        titulo: "Rapchen",
        autor: "Roberth",
        publicacion: 2004,
        editorial: "Ters",
        paginas: 19306
    }

    return (
        <div>
            <h1>Informacion del libro</h1>
            <h2>{libro.titulo}</h2>
            <p>Autor: {libro.autor}</p>
            <p>Año de publicacion: {libro.publicacion}</p>
            <p>Editorial: {libro.editorial}</p>
            <p>Numero de paginas: {libro.paginas}</p>
        </div>
    )
}

export default Libro