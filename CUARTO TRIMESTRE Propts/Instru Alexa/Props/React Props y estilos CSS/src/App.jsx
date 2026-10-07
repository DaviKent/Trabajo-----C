import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx'
import PanelDerecho from './PanelDerecho.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar titulo="Menú" />
      <Dashboard titulo="UI Design" />
      <PanelDerecho titulo="Detalle del servicio" />
    </div>
  )
}

export default App