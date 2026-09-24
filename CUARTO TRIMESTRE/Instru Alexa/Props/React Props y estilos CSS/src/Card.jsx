import './App.css'

function Card({ titulo, descripcion, categoria, imagen, precio, estado, destacado }) {
  const precioFormateado = precio.toLocaleString('es-CO')

  return (
    <div className={`card ${destacado ? 'card-destacada' : ''}`}>
      {destacado && <span className="card-etiqueta-destacado">Destacado</span>}

      <div className="card-imagen">
        <span>{imagen}</span>
        <span className="card-indicador" />
      </div>

      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descripcion">{descripcion}</p>

      <div className="card-info">
        <span className="card-categoria">{categoria}</span>
        <span
          className={`card-estado ${
            estado === 'Disponible' ? 'card-estado-disponible' : 'card-estado-agotado'
          }`}
        >
          {estado}
        </span>
      </div>

      <p className="card-precio">${precioFormateado}</p>
    </div>
  )
}

export default Card