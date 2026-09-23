// innerHTML permite leer o modificar texto de un elemento sin embargo
// el contenido debe estar visible

function leerTexto() {
    let parrafo=document.getElementById("parrafo")
    let  texto=parrafo.innerHTML
    console.log("el texto es: "+texto)
}

let cambiarTitulo=() => {
    let titulo=document.getElementById("titulo")
    titulo.innerHTML="TITULO INNERHTML"
}

function cambiarParrafo() {
    let parrafo=document.getElementById("parrafo")
    parrafo.innerHTML="parrafo INNERHTML"
}
function mostratHTML() {
    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML="<h3>Esto es una prueba de codigo HTML</h3>"
}