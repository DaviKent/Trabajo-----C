const inicioSesion=()=>{
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    let vEmail=email.value
    let VPassword=password.value
    let usuario=JSON.parse(localStorage.getItem("usuario"))
    console.log("usuario")
    //usuario={nombre:"aaaaa",...........}
    if(vEmail==usuario.email){
        alert("email escrito correctamente")
        if(VPassword==usuario.password){
            alert("password escrito correctamente")
            console.log("logrado correctamente")
            usuario={
                email:vEmail,
                password:VPassword
        }
        localStorage.setItem("usuarioLogeado", )
        }
        else{
            alert("password incorrecto")
        }
    }
    else{
        alert("email incorrecto")
    }
}
