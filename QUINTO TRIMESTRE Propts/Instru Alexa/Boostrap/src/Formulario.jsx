import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function Formulario() {
    return(
        <Container fluid>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Nombre
                    </Form.Label>
                    <Form.Control type="text" placeholder='Ingrese Nombre....'>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Apellido
                    </Form.Label>
                    <Form.Control type="text" placeholder='Ingrese Apellido....'>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Direccion
                    </Form.Label>
                    <Form.Control type="text" placeholder='Ingrese Direccion....'>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Telefono
                    </Form.Label>
                    <Form.Control type="text" placeholder='Ingrese Telefono....'>
                    </Form.Control>
                </Form.Group>
                <Button variant='success'>Aceptar</Button>
            </Form>
        </Container>
    )
}

export default Formulario