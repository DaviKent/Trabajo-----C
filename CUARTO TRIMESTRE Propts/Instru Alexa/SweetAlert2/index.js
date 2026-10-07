let boton = document.querySelector("#boton")
let boton2 = document.querySelector("#boton2")

boton.addEventListener("click", ()=>{
    Swal.fire({
        title:"Bienvenido a mi alerta",
        text:"Esta es la alerta de Bienvenido",
        icon:"success",
        confirmButtonText:"Aceptar"
    })
})

boton2.addEventListener("click", async ()=>{
    let resultado = await Swal.fire({
        title:"Desea Eliminar",
        text:"Esta seguro que desea Eliminar",
        icon:"warning",
        showCancelButton:true,
        confirmButtonText:"Si, eliminar",
        cancelButtonText:"No, salir alerta"
    })
    console.log(resultado.isConfirmed)
    if (resultado.isConfirmed==true){
        alert("registro eliminado")
    } 
    else{
        alert("registro no eliminado")
    }   
    //Consultar las funciones asyncronas y sincronicas en javascript
    //en un documento word en tabla de las dos
    //Funcionalidad y cuando se usa cada una
})