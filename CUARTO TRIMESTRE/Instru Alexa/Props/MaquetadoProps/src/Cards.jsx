
function Cards(props){
    return(
        <div className="cards">
            {props.nombredisney}
            <p>Producto: {props.producto}</p>
            <p>Precio: {props.precio}</p>
        </div>
    )
}

export default Cards