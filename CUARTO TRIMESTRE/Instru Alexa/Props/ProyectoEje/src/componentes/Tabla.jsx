function Tabla() {
    return (
        <table style={{ borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>nombre</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>edad</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>cristian</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>22</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabla