import "./App.css"
import Sidebar from "./Sidebar"
import Dasboard from "./Dashboard"
function App() {

  return (
    <div className="app">
      <Sidebar nombre="Camila Gomez"></Sidebar>
      <Dasboard nombretarjeta="Ariel Medina"></Dasboard>
    </div>
  )
}

export default App