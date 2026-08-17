//localStorage=> herramienta de javascript que permite
//guardar informacion en el navegador, datos permanecen guardados
//aunque actualices la pagina o la cierres
//metodos=> 
//setItem=> crear(clave, valor)
//getItem=> traer

let guardar=()=>{
    let name=document.getElementById("nombre").value
    localStorage.setItem("nombre", name)
}

let ver=()=>{
    let n=localStorage.getItem("nombre")
    alert(n)
}