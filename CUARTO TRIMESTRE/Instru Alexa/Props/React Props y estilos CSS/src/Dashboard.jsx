import Card from './Card'
import './App.css'

function Dashboard({ servicios }) {
  const filtros = ['Todos', 'Diseño', 'Desarrollo', 'Soporte']

  return (
    <main className="dashboard">
      <header className="dashboard-encabezado">
        <h1>UI Design</h1>
        <input
          type="text"
          className="dashboard-buscador"
          placeholder="Buscar..."
        />
      </header>

      <nav className="dashboard-tabs">
        {filtros.map((filtro, index) => (
          <span
            key={filtro}
            className={`dashboard-tab ${index === 2 ? 'dashboard-tab-activo' : ''}`}
          >
            {filtro}
          </span>
        ))}
      </nav>

      <section className="dashboard-tarjetas-contenedor">
        <div className="dashboard-tarjetas-header">
          <h2>Servicios</h2>
          <span className="dashboard-tarjetas-subtitulo">Catálogo disponible</span>
        </div>

        <div className="dashboard-grid">
          {servicios.map((servicio) => (
            <Card
              key={servicio.id}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              categoria={servicio.categoria}
              imagen={servicio.imagen}
              precio={servicio.precio}
              estado={servicio.estado}
              destacado={servicio.destacado}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Dashboard