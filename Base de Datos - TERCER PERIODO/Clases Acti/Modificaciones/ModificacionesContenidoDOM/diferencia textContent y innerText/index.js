let innerT=() => {
    let textoV=document.getElementById("textoV")
    let textoO=document.getElementById("textoO")
    let contenedor=document.getElementById("contenedor")
    alert(textoV.innerText)
    alert(contenedor.innerText)
    console.log(textoO.innerText)
}
//innerText no permite leer etiquetas de contenido de texto 
//que no esten visibles display:none
let textC=() => {
    let textoV=document.getElementById("textoV")
    let textoO=document.getElementById("textoO")
    let contenedor=document.getElementById("contenedor")
    alert(textoV.textContent)
    alert(contenedor.textContent)
    console.log(textoO.textContent)
}
//textContent permite leer cualquier contenido
//sin importar que no este visible