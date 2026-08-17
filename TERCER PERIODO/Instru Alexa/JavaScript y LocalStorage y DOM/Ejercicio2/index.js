let departamentos = []
let guardar = document.getElementById("guardar")
let ver = document.getElementById("ver")

guardar.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value
    let responsable = document.getElementById("responsable").value
    let empleados = document.getElementById("empleados").value
    let ubicacion = document.getElementById("ubicacion").value
    let imagen = document.getElementById("imagen").value

    let departamento = {
        nombre: nombre,
        responsable: responsable,
        empleados: empleados,
        ubicacion: ubicacion,
        imagen: imagen
    }
    departamentos.push(departamento)

    localStorage.setItem("departamentos", JSON.stringify(departamentos))

    alert("Departamento guardado")

    document.getElementById("nombre").value = ""
    document.getElementById("responsable").value = ""
    document.getElementById("empleados").value = ""
    document.getElementById("ubicacion").value = ""
    document.getElementById("imagen").value = ""
})
ver.addEventListener("click", function(){
    let datos = JSON.parse(localStorage.getItem("departamentos"))

    let contenedor = document.getElementById("contenedor")

    contenedor.innerHTML = ""

    let tabla = document.createElement("table")

    let encabezado = document.createElement("tr")

    let nombre = document.createElement("th")
    nombre.textContent = "Nombre"

    let responsable = document.createElement("th")
    responsable.textContent = "Responsable"

    let empleados = document.createElement("th")
    empleados.textContent = "Empleados"

    let ubicacion = document.createElement("th")
    ubicacion.textContent = "Ubicacion"

    let imagen = document.createElement("th")
    imagen.textContent = "Imagen"

    encabezado.appendChild(nombre)
    encabezado.appendChild(responsable)
    encabezado.appendChild(empleados)
    encabezado.appendChild(ubicacion)
    encabezado.appendChild(imagen)

    tabla.appendChild(encabezado)
    datos.forEach(function(departamento){

        let fila = document.createElement("tr")

        let nombre = document.createElement("td")
        nombre.textContent = departamento.nombre

        let responsable = document.createElement("td")
        responsable.textContent = departamento.responsable

        let empleados = document.createElement("td")
        empleados.textContent = departamento.empleados

        let ubicacion = document.createElement("td")
        ubicacion.textContent = departamento.ubicacion

        let imagen = document.createElement("td")

        let img = document.createElement("img")
        img.src = departamento.imagen
        img.width = 100

        imagen.appendChild(img)

        fila.appendChild(nombre)
        fila.appendChild(responsable)
        fila.appendChild(empleados)
        fila.appendChild(ubicacion)
        fila.appendChild(imagen)

        tabla.appendChild(fila)
    })
    contenedor.appendChild(tabla)
})