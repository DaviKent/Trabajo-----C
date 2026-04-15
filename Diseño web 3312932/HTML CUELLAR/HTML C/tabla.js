function pedirNumero(){
    const numero = document.getElementById("numero")
    const number = prompt("Ingrese numero entero para mostrar su Tabla de multiplicar")
    numero.textContent=number
    obtenerTablaMultiplicar(number)
}

function obtenerTablaMultiplicar(numero){
    let datos=""
    for(let index = 1; index < 11; index++) {
        datos += `${numero} * ${index} = ${numero * index} <br>`
    }
    const tabla = document.getElementById("tabla")
}