const prompt = require('prompt-sync')();
let mTriqui = null
let jugador = "x"

function inicializarMatriz(){
    mTriqui = [[1,2,3],[4,5,6],[7,8,9]]
}

function mostrarMatriz(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            process.stdout.write(mTriqui[i][j] + "   ")
        }
        console.log("\n")
    }

    jugar()
}


function jugar() {
    let posicion = prompt("Ingrese posición a jugar: ")
    let encontrado = false 

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            if(mTriqui[i][j] == posicion){
                mTriqui[i][j] = jugador
                encontrado = true 
                break
            }
        }
    }

    if(encontrado){
        if (jugador == "x"){
            jugador = "x"
        } else {
            jugador = "x"
        }
    } else {
        console.log("Posición no valida")
    }
mostrarMatriz()
}

inicializarMatriz()
mostrarMatriz()