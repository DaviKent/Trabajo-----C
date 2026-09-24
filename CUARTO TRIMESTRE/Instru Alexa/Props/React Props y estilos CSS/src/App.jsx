import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import PanelDerecho from './PanelDerecho'
import './App.css'

function App() {
  const servicios = [
    {
      id: 1,
      titulo: 'Diseño Web',
      descripcion: 'Diseño de interfaces modernas y responsivas',
      categoria: 'Diseño',
      imagen: '🖥️',
      precio: 250000,
      estado: 'Disponible',
      destacado: false,
    },
    {
      id: 2,
      titulo: 'Desarrollo Frontend',
      descripcion: 'Construcción de interfaces con React',
      categoria: 'Desarrollo',
      imagen: '💻',
      precio: 380000,
      estado: 'Disponible',
      destacado: true,
    },
    {
      id: 3,
      titulo: 'UI Kit',
      descripcion: 'Componentes visuales reutilizables',
      categoria: 'Diseño',
      imagen: '🎨',
      precio: 150000,
      estado: 'Agotado',
      destacado: false,
    },
    {
      id: 4,
      titulo: 'Consultoría UX',
      descripcion: 'Análisis de experiencia de usuario',
      categoria: 'Consultoría',
      imagen: '🧭',
      precio: 300000,
      estado: 'Disponible',
      destacado: false,
    },
    {
      id: 5,
      titulo: 'Servicio Premium',
      descripcion: 'Servicio especializado con soporte prioritario',
      categoria: 'Premium',
      imagen: '⭐',
      precio: 450000,
      estado: 'Disponible',
      destacado: true,
    },
    {
      id: 6,
      titulo: 'Mantenimiento Web',
      descripcion: 'Actualización y soporte continuo del sitio',
      categoria: 'Soporte',
      imagen: '🛠️',
      precio: 200000,
      estado: 'Disponible',
      destacado: false,
    },
  ]

  return (
    <div className="app-contenedor">
      <Sidebar />
      <Dashboard servicios={servicios} />
      <PanelDerecho />
    </div>
  )
}

export default App