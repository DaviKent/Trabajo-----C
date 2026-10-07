import Nav from 'react-bootstrap/Nav'

function Sidebar() {
    return (
        <Nav
            variant="underline"
            defaultActiveKey="/inicio"
            className="d-flex flex-row"
        >
            <Nav.Item>
                <Nav.Link href="/inicio">
                    inicio
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="usuarios">
                    usuarios
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="configuracion">
                    configuración
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Sidebar