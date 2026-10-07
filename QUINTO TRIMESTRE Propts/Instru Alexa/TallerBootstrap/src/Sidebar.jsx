import { Nav } from 'react-bootstrap'

function Sidebar() {
    return (
        <div className="bg-dark text-white p-3" style={{ width: '220px', minHeight: '100vh' }}>

            <h4 className="mb-5">Mi sistema</h4>

            <Nav className="flex-column">

                <Nav.Link href="#" className="text-white mb-4">
                    <i class="bi bi-house me-2"></i>
                    Inicio
                </Nav.Link>

                <Nav.Link href="#" className="text-white mb-4">
                    <i class="bi bi-people me-2"></i>
                    Usuarios
                </Nav.Link>

                <Nav.Link href="#" className="text-white mb-4">
                    <i class="bi bi-box-seam-fill me-2"></i>
                    Productos
                </Nav.Link>

                <Nav.Link href="#" className="text-white mb-4">
                    <i class="bi bi-cart-plus-fill me-2"></i>
                    Ventas
                </Nav.Link>

                <Nav.Link href="#" className="text-white mb-4">
                    <i class="bi bi-briefcase-fill me-2"></i>
                    Finanzas
                </Nav.Link>

                <Nav.Link href="#" className="text-white mb-4">
                    <i class="bi bi-bell-fill me-2"></i>
                    Notificaciones
                </Nav.Link>

                <Nav.Link href="#" className="text-white mb-4">
                    <i class="bi bi-gear-fill me-2"></i>
                    Configuración
                </Nav.Link>

            </Nav>

            <button className="btn btn-danger w-100 mt-5">
                <i class="bi bi-door-open-fill me-2"></i>
                cerrar sesión
            </button>

        </div>
    )
}

export default Sidebar