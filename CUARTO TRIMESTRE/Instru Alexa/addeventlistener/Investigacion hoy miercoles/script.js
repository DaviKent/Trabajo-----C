let btn = document.querySelector("#boton");

let cont = document.querySelector("#contenedor");

btn.addEventListener("click", () => {

    cont.classList.toggle("activo");

});