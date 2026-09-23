let cuadro=document.getElementById("cuadro")
cuadro.onmousedown=function(){
    document.onmousemove=function(evento){
        cuadro.style.left=evento.clientX+"px"
        cuadro.style.top=evento.clientY+"px"
    }
    document.onmouseup=function(){
        document.onmousemove=null
    }
}