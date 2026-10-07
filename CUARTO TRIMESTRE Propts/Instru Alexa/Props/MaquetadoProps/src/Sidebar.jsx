
function Sidebar(props){
    return(
        <div className="sidebar">
            <div className="logo">
                Ejemplo
            </div>
            <nav className="menu">
                <div>
                    Dasboard
                </div>
                <div>
                    Menu
                </div>
                <div>
                    Pedidos
                </div>
                <div>
                    Tabla
                </div>
                <div>
                    Cuenta
                </div>
                <div>
                    Settings
                </div>
            </nav>
            <div className="perfil">
                {props.nombre}
            </div>
        </div>
    )
}

export default Sidebar