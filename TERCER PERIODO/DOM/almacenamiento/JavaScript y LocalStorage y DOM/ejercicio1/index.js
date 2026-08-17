let paises = [];
let guardar=()=>{
    let nombre=document.getElementById("name").value
    let capital=document.getElementById("capital").value
    let continente=document.getElementById("continent").value
    let idioma=document.getElementById("language").value
    let bandera=document.getElementById("flag").value
    let pais={
        nombre:nombre,
        capital:capital,
        continente:continente,
        idioma:idioma,
        bandera:bandera
    }
    paises.push(pais)
    console.log(paises)
    localStorage.setItem("paises", JSON.stringify(paises))
    alert("País guardado correctamente")
}