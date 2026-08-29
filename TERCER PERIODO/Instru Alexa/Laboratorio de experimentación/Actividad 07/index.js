function buscarElemento() {
let titulo = document.getElementById("titulo")

titulo.textContent = "Elemento encontrado"

document.getElementById("resultado").textContent =
    "Se encontró el título utilizando su ID."
}

function buscarVarios() {
let juegos = document.querySelectorAll(".juego")

document.getElementById("resultado").textContent =
    "Se encontraron " + juegos.length + " videojuegos."
}

function buscarClase() {
let juegosAccion = document.querySelectorAll(".accion")

for (let i = 0; i < juegosAccion.length; i++) {

    juegosAccion[i].textContent = "Videojuego de acción encontrado."
}

document.getElementById("resultado").textContent =
    "Se encontraron " + juegosAccion.length + " videojuegos de acción."
}

function buscarEtiqueta() {
let botones = document.querySelectorAll("button")

document.getElementById("resultado").textContent =
    "Se encontraron " + botones.length + " botones en la página."
}

function buscarEspecifico() {
let juego = document.querySelector(".juego.accion")
juego.textContent = "Encontré un juego que tiene las clases juego y accion."

document.getElementById("resultado").textContent =
    "Se encontró un elemento que cumple dos condiciones."
}
