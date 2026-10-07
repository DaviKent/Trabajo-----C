
import { Table, Pagination, Container } from 'react-bootstrap'

function TablaProductos() {
    const productos = [
        {id:1, nombre:"Leche", cantidad:"1 Litro"},
        {id:2, nombre:"Chocorramo", cantidad:"70 g"},
        {id:3, nombre:"Yogurt Alphina", cantidad:"1000 g"},
        {id:4, nombre:"Galletas festival", cantidad:"403 g"},
        {id:5, nombre:"Café sello rojo molido", cantidad:"500 g"},
        {id:6, nombre:"Papas margaritas pollo", cantidad:"500 g"},        
    ]
    return(
        <Container className="mt-4">
            <h3 className="mb-3 text-center"></h3>

            {
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((item) =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </Container>
    )
}

export default TablaProductos