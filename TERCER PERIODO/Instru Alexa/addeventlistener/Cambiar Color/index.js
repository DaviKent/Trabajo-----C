let btn=document.querySelector("#boton")
let cont=document.querySelector("#contenedor")
btn.addEventListener("click",()=>{
    if (cont.value=="activo")
    {
        cont.style.background="green"
        cont.value="inactivo"
    }
    else{
        cont.style.background="red"
        cont.value="activo"
    }
})
// investigar que es el toggle y cambiar todo el js