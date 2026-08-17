function capturatecla() {
    let campoprofesion = document.getElementById('profesion')
    let contenido = campoprofesion.value

    document.getElementById("resultado").textContent = contenido
    console.log("contenido capturado:"+ contenido)
}