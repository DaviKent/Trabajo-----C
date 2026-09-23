function mostrarDatos() {

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let direccion = document.getElementById("direccion").value
    let correo = document.getElementById("correo").value
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = "Nombre: " + nombre + "<br>" +
                          "Apellido: " + apellido + "<br>" +
                          "Dirección: " + direccion + "<br>" +
                          "Correo: " + correo;
}