import Cards from "./Cards"

function Dasboard(props){
    return(
        <div className="dashboard">
            <Cards nombredisney={props.nombretarjeta} producto="Manzana" precio="$2000"></Cards>
            <Cards nombredisney={props.nombretarjeta} producto="Fresa" precio="$2000"></Cards>
            <Cards nombredisney={props.nombretarjeta} producto="Uvas" precio="$2000"></Cards>
            <Cards nombredisney={props.nombretarjeta} producto="Naranja" precio="$2000"></Cards>
            <Cards nombredisney={props.nombretarjeta} producto="Salchipapa" precio="$2000"></Cards>
            <Cards nombredisney={props.nombretarjeta} producto="Agua" precio="$2000"></Cards>
        </div>
    )
}

export default Dasboard