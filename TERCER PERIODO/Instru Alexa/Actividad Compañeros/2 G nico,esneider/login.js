const iniciar = () => {
    // Capturar los datos que escribe el usuario
    let email = document.getElementById("correo")
    let pass = document.getElementById("contra")
    // Verificacion
    let dEmail = email.value
    let dPass = pass.value

    // Obtener los usuarios guardados en local storage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    let encontrado = false

    // Recorrer todos los usuarios del arreglo
    for (let i = 0; i<usuarios.length; i++ ){
        if (dEmail === usuarios[i].correo && dPass === usuarios[i].password){
            encontrado = true
            console.log("Logeado correctamente")

            // Verificar el cargo del usuario
            if (usuarios[i].cargo==="gerente"){
                document.getElementById("enlaceGerente").click()
            } else if (usuarios[i].carglo==="supervisor"){
                document.getElementById("enlaceSupervisor").click()
            } else if (usuarios[i].cargo==="empleado"){
                document.getElementById("enlaceEmpleado").click()
            }
        }

        if(encontrado===false){
            alert("Correo o contraseña incorrectos")
        }
    }
    const registrarse = () => {
        document.getElementById("registrarse").click()
    }
}