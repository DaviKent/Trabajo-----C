function Card(props) {

  return (
    <div className={props.destacado ? "card card-destacado" : "card"}>

      <div className="card-imagen">
        💻
      </div>

      <h3>{props.titulo}</h3>

      <p>{props.descripcion}</p>

      <strong>${props.precio}</strong>

    </div>
  )
}

export default Card