function areaCuadrado(lado){
    return lado * lado
}

function areaTriangulo(base,altura){
    return base * altura / 2
}

function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2)
}

console.log("El area del cuadrado de lado 5 es: " + areaCuadrado(5))
console.log("El area del triangulo de base 6.5cm y altura de 3.8cm es: " + areaTriangulo(6.5,3.8))
console.log("El area del circulo de radio de 5.8cm es: " + areaCirculo(5.8))


