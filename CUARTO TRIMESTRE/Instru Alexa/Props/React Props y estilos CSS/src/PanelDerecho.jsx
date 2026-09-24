import './App.css'

function PanelDerecho() {
  return (
    <aside className="panel-derecho">
      <div className="panel-imagen"></div>

      <span className="panel-categoria">Desarrollo Frontend</span>
      <h3 className="panel-titulo">Detalle del servicio</h3>

      <div className="panel-estrellas">★★★★☆</div>

      <p className="panel-descripcion">
        Construcción de interfaces con React aplicando componentes
        reutilizables, props y estilos CSS organizados.
      </p>

      <button className="panel-boton">Ver más</button>
    </aside>
  )
}

export default PanelDerecho