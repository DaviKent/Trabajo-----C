import './App.css'
import { Button } from 'react-bootstrap'
import Formulario from './Formulario'
/* buttones react-boostrap */
function App() {

  return (
    <div>
      <Button variant="primary">Aceptar</Button> 
      <Button variant="danger">Eliminar</Button> 
      <Button variant="success">Actualizar</Button> 
      <Button variant="warning">Warning</Button> 
      <Formulario></Formulario>
    </div>
  )
}

export default App
