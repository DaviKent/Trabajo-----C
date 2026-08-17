let animales = []
let guardar = document.getElementById("guardar")
let ver = document.getElementById("ver")

guardar.addEventListener("click", function(){

    let nombre = document.getElementById("nombre").value
    let especie = document.getElementById("especie").value
    let edad = document.getElementById("edad").value
    let habitat = document.getElementById("habitat").value
    let imagen = document.getElementById("imagen").value

    let animal = {
        nombre: nombre,
        especie: especie,
        edad: edad,
        habitat: habitat,
        imagen: imagen
    }

    animales.push(animal)

    localStorage.setItem("animales", JSON.stringify(animales))

    alert("Animal guardado")

    document.getElementById("nombre").value = ""
    document.getElementById("especie").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("habitat").value = ""
    document.getElementById("imagen").value = ""

})
ver.addEventListener("click", function(){

    let datos = JSON.parse(localStorage.getItem("animales"))

    let contenedor = document.getElementById("contenedor")

    contenedor.innerHTML = ""

    datos.forEach(function(animal){

        let tarjeta = document.createElement("div")

        let nombre = document.createElement("h2")
        nombre.textContent = animal.nombre

        let especie = document.createElement("p")
        especie.textContent = "Especie: " + animal.especie

        let edad = document.createElement("p")
        edad.textContent = "Edad: " + animal.edad

        let habitat = document.createElement("p")
        habitat.textContent = "Habitat: " + animal.habitat

        let imagen = document.createElement("img")
        imagen.src = animal.imagen
        imagen.width = 200

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(especie)
        tarjeta.appendChild(edad)
        tarjeta.appendChild(habitat)
        tarjeta.appendChild(imagen)

        contenedor.appendChild(tarjeta)
    })
})