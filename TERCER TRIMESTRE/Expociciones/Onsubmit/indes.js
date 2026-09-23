function capturarDatos(event) {

    event.preventDefault();

    let correo = document.getElementById("Correo").value;
    let mensaje = document.getElementById("Mensaje").value;

    if (correo == "" || mensaje == ""){
        alert("Debe completar todo los campos");
        return;
    }
    document.getElementById("resultado").innerHTML = 
    "Correo: " + correo + "<br> Mensaje: " + mensaje;
}