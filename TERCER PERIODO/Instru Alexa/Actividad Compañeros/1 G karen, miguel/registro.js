let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

const guardar = () => {
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let documento = document.getElementById("documento")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let tipo = document.getElementById("tipo")

    let nuevoUsuario = {
        nombre: nombre.value,
        apellido: apellido.value,
        documento: documento.value,
        email: email.value,
        password: password.value,
        tipo: tipo.value
    }

    usuarios.push(nuevoUsuario)
    localStorage.setItem("usuario", JSON.stringify(usuario))
    alert("Usuario guardado correctamente: " + nuevoUsuario.nombre)

    usuarios.value = ""
    apellido.value = ""
    email.value = ""
    password.value = ""

}