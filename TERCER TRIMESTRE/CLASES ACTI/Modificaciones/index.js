// textContent permite leer o modificar
// texto dentro de un html

function cambiarTitulo() {
    let titulo=document.getElementById("titulo");
    titulo.textContent="Nuevo titulo Text Content";
}
// function tipo fleca =>

let cambiarTitulo2 = () => {
    let titulo=document.getElementById("titulo");
    titulo.textContent="Nuevo titulo Text Content";
}