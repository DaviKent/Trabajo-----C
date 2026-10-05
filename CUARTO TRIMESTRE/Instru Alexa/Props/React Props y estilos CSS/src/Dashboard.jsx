import Card from './Card.jsx'

function Dashboard(props) {

  const servicios = [
    {
      id: 1,
      titulo: "Diseño web",
      descripcion: "Interfaces modernas",
      precio: 250000,
      destacado: true
    },
    {
      id: 2,
      titulo: "Frontend",
      descripcion: "Desarrollo con React",
      precio: 380000,
      destacado: true
    },
    {
      id: 3,
      titulo: "UI kit",
      descripcion: "Componentes reutilizables",
      precio: 150000
    },
    {
      id: 4,
      titulo: "Consultorio",
      descripcion: "Experiencia de usuario",
      precio: 256000
    },
        {
      id: 5,
      titulo: "Reparacion",
      descripcion: "Experiencia de usuario",
      precio: 956480
    },
        {
      id: 6,
      titulo: "Inspeccion",
      descripcion: "Experiencia de usuario",
      precio: 300000
    }
  ]

  return (
    <div className="dashboard">

      <h1>{props.titulo}</h1>

      <div className="tabs">
        <span>Todos</span>
        <span>Diseño</span>
        <span>Desarrollo</span>
      </div>

      <div className="grid">

        {servicios.map((servicio) => (
          <Card
            key={servicio.id}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            precio={servicio.precio}
            destacado={servicio.destacado}
          />
        ))}

      </div>

    </div>
  )
}

export default Dashboard