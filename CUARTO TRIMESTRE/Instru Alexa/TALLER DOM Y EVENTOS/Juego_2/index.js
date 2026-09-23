let clics=0
function contar() {
    clics++
    document.getElementById("contador").innerHTML=clics
    if (clics >= 10) {
        document.getElementById("contador").style.color="red"
    }
}