const vuelve = () => {
    document.getElementById("login").click()
}
function guardar(){
    //capturar los datos tal cual los ingrese el usuario
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const cargo = document.getElementById("cargo").value
    const area = document.getElementById("area").value
    const correo = document.getElementById("correo").value
    const password = document.getElementById("password").value

    if (nombre===" " || apellido===" " || cargo===" " || area==="" || correo==="" || password===""){
        alert("Por favor completa todos los campos")
        return
    }
    // traer los usuarios que ya estam em LocalStorage
    const usuarios = JSON.parse(localStorage. getItem("usuarios")) || [];

    //crear el objeto del nuevo usuario
    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        cargo: cargo,
        area: area,
        correo: correo,
        password: password
    }
    // agregar al arreglo y guardar en LocalStorage
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("usuario registrado con exito")

    //limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("area").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cargo").value = "";
}