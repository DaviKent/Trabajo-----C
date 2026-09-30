function Estados(){
    // Js 
    // Variables
    let nombre="Juan Paco"
    let num1=3
    let num2=2
    // Arreglos
    let frutas=[
        "Manzana",
        "Pera",
        "Uva"
    ]
    // Objetos
    let usuario={
        nombre:"David",
        apellido:"Yalanda"
    }
    // Arreglos - Objetos
    let avatar=[
        {
            nombre:"aang",
            imagen:"https://www.magnific.com/free-photos-vectors/avatar"
        },
        {
            nombre:"Suki",
            imagen:"https://favpng.com/png_search/avatar-creative"
        },
        {
            nombre:"Yoji",
            imagen:"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
        },
        {
            nombre:"Sayo",
            imagen:"https://favpng.com/png_search/avatar-series"
        },
        {
            nombre:"Suko",
            imagen:"https://www.svgrepo.com/svg/9907/male-avatar"
        }
    ]
    return(
        <div>
            <div>
                <h1>Hola {nombre}</h1>
            <p>Suma: {num1 + num2}</p>
            <p>{frutas[0]}</p>
            <p>{frutas[1]}</p>
            <p>{frutas[2]}</p>
            <p>{frutas.map((index)=>(
                <p>{index}</p>
            ))}</p>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Frutas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        frutas.map((fruta)=>(
                            <tr>
                                <td>{fruta}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <p>{usuario.nombre}</p>
                <p>{usuario.apellido}</p>
            </div>
            </div>
            <div>
                {avatar.map((a)=>(
                <div className="tarjeta">
                    <p>Nombre: {a.nombre}</p>
                    <img src={a.imagen}></img>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Estados