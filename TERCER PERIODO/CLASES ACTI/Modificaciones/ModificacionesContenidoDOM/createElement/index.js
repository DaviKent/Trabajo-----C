let agregar=()=>{
    let contenedor = document.getElementById("contenedor")
    let tabla = document.createElement("table") 
    tabla.style.border="2px solid black"

    let fila1 = document.createElement("tr")
    
    
    let celda1 = document.createElement("td")
    celda1.style.border="2px solid red"
    celda1.textContent="celda 1 de la fila 1"

    let celda2 = document.createElement("td")
    celda2.textContent="celda 2 de la fila 1"
    celda2.style.border="2px solid red"

    let celda3 = document.createElement("td")
    celda3.textContent="celda 3 de la fila 1"
    celda3.style.border="2px solid red"

    let celda4 = document.createElement("td")
    celda4.textContent="celda 4 de la fila 1"
    celda4.style.border="2px solid red"

    let celda5 = document.createElement("td")
    celda5.textContent="celda 5 de la fila 1"
    celda5.style.border="2px solid red"

    fila1.appendChild(celda1)
    fila1.appendChild(celda2)
    fila1.appendChild(celda3)
    fila1.appendChild(celda4)
    fila1.appendChild(celda5)

    tabla.appendChild(fila1)
    contenedor.appendChild(tabla)

    let fila2 = document.createElement("tr")
    
    let celda6 = document.createElement("td")
    celda6.textContent="celda 6 de la fila 2"
    celda6.style.border="2px solid red"

    let celda7 = document.createElement("td")
    celda7.textContent="celda 7 de la fila 2"
    celda7.style.border="2px solid red"

    let celda8 = document.createElement("td")
    celda8.textContent="celda 8 de la fila 2"
    celda8.style.border="2px solid red"

    let celda9 = document.createElement("td")
    celda9.textContent="celda 9 de la fila 2"
    celda9.style.border="2px solid red"

    let celda10 = document.createElement("td")
    celda10.textContent="celda 10 de la fila 2"
    celda10.style.border="2px solid red"

    fila2.appendChild(celda6)
    fila2.appendChild(celda7)
    fila2.appendChild(celda8)
    fila2.appendChild(celda9)
    fila2.appendChild(celda10)

    tabla.appendChild(fila2)
    contenedor.appendChild(tabla)

    let fila3 = document.createElement("tr")

    let celda11 = document.createElement("td")
    celda11.textContent="celda 11 de la fila 3"
    celda11.style.border="2px solid red"

    let celda12 = document.createElement("td")
    celda12.textContent="celda 12 de la fila 3"
    celda12.style.border="2px solid red"

    let celda13 = document.createElement("td")
    celda13.textContent="celda 13 de la fila 3"
    celda13.style.border="2px solid red"

    let celda14 = document.createElement("td")
    celda14.textContent="celda 14 de la fila 3"
    celda14.style.border="2px solid red"

    let celda15 = document.createElement("td")
    celda15.textContent="celda 15 de la fila 3"
    celda15.style.border="2px solid red"

    fila3.appendChild(celda11)
    fila3.appendChild(celda12)
    fila3.appendChild(celda13)
    fila3.appendChild(celda14)
    fila3.appendChild(celda15)

    tabla.appendChild(fila3)
    contenedor.appendChild(tabla)
    
    let fila4 = document.createElement("tr")


    let celda16 = document.createElement("td")
    celda16.textContent="celda 16 de la fila 4"
    celda16.style.border="2px solid red"

    let celda17 = document.createElement("td")
    celda17.textContent="celda 17 de la fila 4"
    celda17.style.border="2px solid red"

    let celda18 = document.createElement("td")
    celda18.textContent="celda 18 de la fila 4"
    celda18.style.border="2px solid red"

    let celda19 = document.createElement("td")
    celda19.textContent="celda 19 de la fila 4"
    celda19.style.border="2px solid red"

    let celda20 = document.createElement("td")
    celda20.textContent="celda 20 de la fila 4"
    celda20.style.border="2px solid red"

    fila4.appendChild(celda16)
    fila4.appendChild(celda17)
    fila4.appendChild(celda18)
    fila4.appendChild(celda19)
    fila4.appendChild(celda20)

    tabla.appendChild(fila4)
    contenedor.appendChild(tabla)

    let fila5 = document.createElement("tr")

    let celda21 = document.createElement("td")
    celda21.textContent="celda 21 de la fila 5"
    celda21.style.border="2px solid red"

    let celda22 = document.createElement("td")
    celda22.textContent="celda 22 de la fila 5"
    celda22.style.border="2px solid red"

    let celda23 = document.createElement("td")
    celda23.textContent="celda 23 de la fila 5"
    celda23.style.border="2px solid red"

    let celda24 = document.createElement("td")
    celda24.textContent="celda 24 de la fila 5"
    celda24.style.border="2px solid red"

    let celda25 = document.createElement("td")
    celda25.textContent="celda 25 de la fila 5"
    celda25.style.border="2px solid red"

    fila5.appendChild(celda21)
    fila5.appendChild(celda22)
    fila5.appendChild(celda23)
    fila5.appendChild(celda24)
    fila5.appendChild(celda25)

    tabla.appendChild(fila5)
    contenedor.appendChild(tabla)
}