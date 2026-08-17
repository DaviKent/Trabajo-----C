//innerText agrega o cambia texto
//no escribe html
//lee texto

let agregar = () => {
    let titulo = document.getElementById("titulo")
    titulo.innerText = "InnerText"
}
let agregarHtml=() => {
    let titulo2 = document.getElementById("titulo")
    titulo2.innerHTML = "<strong>Mensaje InnerHtml</strong>"
}

function leer() {
    let titulo2 = document.getElementById("titulo")
    alert(titulo2.innerText)
}