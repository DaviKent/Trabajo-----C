let paises = []
let guardar = document.getElementById("guardar")
let ver = document.getElementById("ver")
guardar.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value
    let capital = document.getElementById("capital").value
    let continente = document.getElementById("continente").value
    let idioma = document.getElementById("idioma").value
    let bandera = document.getElementById("bandera").value
    let pais = {
        nombre: nombre,
        capital: capital,
        continente: continente,
        idioma: idioma,
        bandera: bandera
    }
    paises.push(pais)
    localStorage.setItem("paises", JSON.stringify(paises))
    alert("Pais guardado")
})
ver.addEventListener("click", function(){
    let datos = JSON.parse(localStorage.getItem("paises"))
    let contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""
    datos.forEach(function(pais){
        let tarjeta = document.createElement("div")

        let nombre = document.createElement("h2")
        nombre.textContent = pais.nombre

        let capital = document.createElement("p")
        capital.textContent = "Capital: " + pais.capital

        let continente = document.createElement("p")
        continente.textContent = "Continente: " + pais.continente

        let idioma = document.createElement("p")
        idioma.textContent = "Idioma: " + pais.idioma

        let imagen = document.createElement("img")
        imagen.src = pais.bandera
        imagen.width = 200

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(capital)
        tarjeta.appendChild(continente)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(imagen)
        contenedor.appendChild(tarjeta)
    })
})