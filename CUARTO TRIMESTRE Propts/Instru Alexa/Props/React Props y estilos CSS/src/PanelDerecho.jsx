function PanelDerecho(props) {

  return (
    <div className="panel">

      <div className="panel-imagen">
        🖥️
      </div>

      <h3>{props.titulo}</h3>

      <p>★★★★☆</p>

      <p>Información del servicio seleccionado.</p>

      <button>Ver más</button>

    </div>
  )
}

export default PanelDerecho