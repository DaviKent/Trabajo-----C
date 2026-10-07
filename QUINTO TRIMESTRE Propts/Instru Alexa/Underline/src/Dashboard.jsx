import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Dashboard(props) {

    const usuarios = [
        {
            id: 1,
            nombre: 'Juan Perez',
            rol: 'Administrador'
        },
        {
            id: 2,
            nombre: 'Maria Lopez',
            rol: 'Usuario'
        },
        {
            id: 3,
            nombre: 'Carlos Gomez',
            rol: 'Usuario'
        }
    ]

    return (
        <Container className="mt-4">

            <h1>{props.titulo}</h1>

            <p>Bienvenido al panel de administración</p>

            <Row>

                {usuarios.map((usuario) => (
                    <Col md={4} key={usuario.id}>

                        <Card className="mb-3">
                            <Card.Body>

                                <Card.Title>
                                    {usuario.nombre}
                                </Card.Title>

                                <Card.Text>
                                    {usuario.rol}
                                </Card.Text>

                                <button className="btn btn-primary">
                                    Ver usuario
                                </button>

                            </Card.Body>
                        </Card>

                    </Col>
                ))}

            </Row>

        </Container>
    )
}

export default Dashboard