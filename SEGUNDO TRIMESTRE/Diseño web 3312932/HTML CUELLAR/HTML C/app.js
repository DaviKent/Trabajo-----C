function modificarTexto(){
    const cajaTexto = document.getElementById("textoDiv1")
    cajaTexto.textContent="NUEVO TEXTO"
    cajaTexto.style.color="#c51313"
}

function agregarDatos(){
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const correo = document.getElementById("correo")
    const name = prompt("Ingrese su nombre")
    const lastname = prompt("Ingrese su apellido")
    const email = prompt("Ingrese su correo")

    //colocando texto en los lugares indicados
    nombre.textContent=name
    apellido.textContent=lastname
    correo.textContent=email
}