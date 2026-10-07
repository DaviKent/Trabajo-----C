function agregar() {
    let texto = document.getElementById("texto").value
    let elemento = document.createElement("li")
    elemento.innerHTML=texto
    document.getElementById("lista").appendChild(elemento)
}