// addEventlister => dom eventos => click funcion collback
// elemento.addEventlister("evento", funcion)
// funcion tipo flecha => elemento.addEventlister("evento",() => {})
// boton.addEventlister("click",()=>{})
// boton.addEventlister("dbclick",()=>{})
// boton.addEventlister("mouseover",()=>{})
// getElementById=>querySelector
// event.preventdefault()=>manejo de recargas de html

// capturar
let boton = document.querySelector("#boton")
let titulo = document.querySelector(".titulo")
boton.addEventListener("click",()=>{
    titulo.textContent="Titulo"
})