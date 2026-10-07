function Ciudades() {
    const ciudades = [
        "Bogota",
        "Cali",
        "Medellin",
        "Popayan",
        "Cartagena",
        "Barranquilla",
        "Pereira",
        "Manizales",
        "Armenia",
        "Santa Marta"
    ]

    return (
        <div>
            <h1>Ciudades de Colombia</h1>

            <ul>
                {ciudades.map((ciudad, index) => (
                    <li key={index}>{ciudad}</li>
                ))}
            </ul>
        </div>
    )
}

export default Ciudades