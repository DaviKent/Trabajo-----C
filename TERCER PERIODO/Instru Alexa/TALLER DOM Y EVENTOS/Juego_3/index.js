let palabra = "Yogurt"
function validar(){
    let texto = document.getElementById("texto").value
    if (texto == palabra) {
        document.getElementById("resultado").innerHTML = "Muy bien"
    } else {
        document.getElementById("resultado").innerHTML = "Mal"
    }
}