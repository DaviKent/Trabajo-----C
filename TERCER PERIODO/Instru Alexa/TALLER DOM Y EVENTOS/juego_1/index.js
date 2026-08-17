let numeroSecreto = Math.floor(Math.random() * 10) + 1
function adivinar() {
    let numero=document.getElementById("numero").value
    if (numero==numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Muy bien"
    } else {
        document.getElementById("resultado").innerHTML = "Incorrecto, era el " + numeroSecreto
    }
}