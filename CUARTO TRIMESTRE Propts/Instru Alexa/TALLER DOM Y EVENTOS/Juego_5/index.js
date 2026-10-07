let aciertos=0
function mover(){
    aciertos++
    document.getElementById("contador").innerHTML=aciertos
    let x = Math.random() * 500
    let y = Math.random() * 300
    document.getElementById("boton").style.left=x+"px"
    document.getElementById("boton").style.top=y+"px"
}