function consultarusuario() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve("usuario encontrado");

        }, 3000);

    });
}

async function mostrarusuario() {

    document.getElementById("resultado").innerHTML = "consultando usuario...";

    let resultado = await consultarusuario();

    document.getElementById("resultado").innerHTML = resultado;

    document.getElementById("resultado").innerHTML += "<br>proceso terminado";
}

document.getElementById("boton").onclick = mostrarusuario;