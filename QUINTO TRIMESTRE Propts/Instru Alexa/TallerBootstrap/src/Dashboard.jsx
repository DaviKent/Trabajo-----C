import { Card } from 'react-bootstrap'

function Dashboard() {
    return (
        <div className="p-4">

            <h2>Dashboard</h2>
            <p>
                Resumen general del sistema
            </p>

            <div className="d-flex gap-3">

                <Card style={{ width: '200px' }}>
                    <Card.Body>
                        <Card.Title>
                            Usuarios
                        </Card.Title>

                        <h2>120</h2>

                        <Card.Text>
                            Usuarios registrados
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '200px' }}>
                    <Card.Body>
                        <Card.Title>
                            Productos
                        </Card.Title>

                        <h2>80</h2>

                        <Card.Text>
                            Productos disponibles
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '200px' }}>
                    <Card.Body>
                        <Card.Title>
                            Ventas
                        </Card.Title>

                        <h2>45</h2>

                        <Card.Text>
                            Ventas realizadas
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>

        </div>
    )
}

export default Dashboard