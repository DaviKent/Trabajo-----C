// EXPERIMENTO 1
// Seleccionar un elemento específico

function experimento1() {

    let elemento = document.getElementById("titulo");

    document.getElementById("resultado").textContent =
        "Experimento 1: Se encontró el elemento con id 'titulo': " +
        elemento.textContent;
}


// EXPERIMENTO 2
// Seleccionar varios elementos que compartan una clase

function experimento2() {

    let elementos = document.querySelectorAll(".parrafo");

    document.getElementById("resultado").textContent =
        "Experimento 2: Se encontraron " +
        elementos.length +
        " elementos con la clase 'parrafo'.";
}


// EXPERIMENTO 3
// Seleccionar todos los elementos de una determinada etiqueta

function experimento3() {

    let botones = document.querySelectorAll("button");

    document.getElementById("resultado").textContent =
        "Experimento 3: Se encontraron " +
        botones.length +
        " elementos <button>.";
}


// EXPERIMENTO 4
// Utilizar diferentes tipos de selectores

function experimento4() {

    let porId = document.querySelector("#imagenEspecial");

    let porClase = document.querySelector(".especial");

    let porEtiqueta = document.querySelector("h2");

    document.getElementById("resultado").textContent =
        "Experimento 4: Se encontraron elementos utilizando un selector por ID, uno por clase y uno por etiqueta.";
}


// EXPERIMENTO 5
// Seleccionar un elemento que cumpla más de una condición

function experimento5() {

    let elemento = document.querySelector("p.especial");

    document.getElementById("resultado").textContent =
        "Experimento 5: Se encontró un <p> que además tiene la clase 'especial': " +
        elemento.textContent;
}