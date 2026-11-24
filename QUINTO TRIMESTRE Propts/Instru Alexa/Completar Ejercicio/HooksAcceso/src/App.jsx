import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Efecto from './Efecto'
import Hooks from './Hooks'
import TablaRoles from './TablaRoles'
import TablaUsuarios from './TablaUsuario'
import ActualizarRol from './ActualizarRol'

import './App.css'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/efecto'element={<Efecto></Efecto>}></Route>
        <Route path='/hook' element={<Hooks></Hooks>}></Route>
        <Route path='/tabla' element={<TablaRoles></TablaRoles>}></Route>
        <Route path='/Usuario' element={<TablaUsuarios></TablaUsuarios>}></Route>
        <Route path="/ActualizarRol/:id" element={<ActualizarRol></ActualizarRol>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
