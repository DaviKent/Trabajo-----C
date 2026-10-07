function Animales() {
    const animales = [
        {
            nombre: "Leon",
            especie: "Mamifero",
            habitat: "Sabana"
        },
        {
            nombre: "Tigre",
            especie: "Mamifero",
            habitat: "Selva"
        },
        {
            nombre: "Aguila",
            especie: "Ave",
            habitat: "Montañas"
        },
        {
            nombre: "Delfin",
            especie: "Mamifero",
            habitat: "Oceano"
        },
        {
            nombre: "Elefante",
            especie: "Mamifero",
            habitat: "Sabana"
        },
        {
            nombre: "Cocodrilo",
            especie: "Reptil",
            habitat: "Rios"
        },
        {
            nombre: "Pinguino",
            especie: "Ave",
            habitat: "Antartida"
        },
        {
            nombre: "Oso",
            especie: "Mamifero",
            habitat: "Bosques"
        },
        {
            nombre: "Serpiente",
            especie: "Reptil",
            habitat: "Selva"
        },
        {
            nombre: "Tiburon",
            especie: "Pez",
            habitat: "Oceano"
        }
    ]

    return (
        <div>
            <h1>Lista de animales</h1>

            {animales.map((animal, index) => (
                <div key={index}>
                    <h2>{animal.nombre}</h2>
                    <p>Especie: {animal.especie}</p>
                    <p>Habitat: {animal.habitat}</p>
                </div>
            ))}
        </div>
    )
}

export default Animales