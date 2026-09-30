function Restaurante() {
    const platos = [
        {
            id: 1,
            nombre: "Hamburguesa",
            categoria: "Comida rapida",
            precio: 18000
        },
        {
            id: 2,
            nombre: "Pizza",
            categoria: "Comida italiana",
            precio: 22000
        },
        {
            id: 3,
            nombre: "Pasta",
            categoria: "Comida italiana",
            precio: 20000
        },
        {
            id: 4,
            nombre: "Arroz con pollo",
            categoria: "Plato fuerte",
            precio: 18000
        },
        {
            id: 5,
            nombre: "Sopa de verduras",
            categoria: "Sopa",
            precio: 12000
        },
        {
            id: 6,
            nombre: "Ensalada",
            categoria: "Saludable",
            precio: 14000
        },
        {
            id: 7,
            nombre: "Perro caliente",
            categoria: "Comida rapida",
            precio: 15000
        },
        {
            id: 8,
            nombre: "Pollo a la plancha",
            categoria: "Plato fuerte",
            precio: 23000
        },
        {
            id: 9,
            nombre: "Lasaña",
            categoria: "Comida italiana",
            precio: 21000
        },
        {
            id: 10,
            nombre: "Hamburguesa doble",
            categoria: "Comida rapida",
            precio: 25000
        }
    ]

    return (
        <div>
            <h1>Menu del restaurante</h1>

            {platos.map((plato) => (
                <div key={plato.id}>
                    <h2>{plato.nombre}</h2>
                    <p>Categoria: {plato.categoria}</p>
                    <p>Precio: ${plato.precio}</p>
                </div>
            ))}
        </div>
    )
}

export default Restaurante