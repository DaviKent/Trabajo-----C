import './App.css'

function Sidebar() {
  const opciones = ['▲', '📊', '★', '▦', '○']

  return (
    <aside className="sidebar">
      <button className="sidebar-boton-menu">☰</button>

      <nav>
        <ul className="sidebar-lista">
          {opciones.map((icono, index) => (
            <li
              key={index}
              className={`sidebar-item ${index === 3 ? 'sidebar-item-activo' : ''}`}
            >
              {icono}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-configuracion">⚙️</div>
    </aside>
  )
}

export default Sidebar