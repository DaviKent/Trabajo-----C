const inputTelefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');

inputTelefono.addEventListener('blur', function () {
    const valorIngresado = inputTelefono.value.trim ();

    if(valorIngresado === '') {
        mensaje.textContent = '¡El numero no puede estar vacio!';
        mensaje.className = 'Mensaje error';
        return;
    }

    const esValido = /^[0-9]{8,10}$/.test(valorIngresado);

    if(esValido) {
        mensaje.textContent = '¡Numero registrado correctamente!';
        mensaje.className = 'Mensaje valido';
    }else{
        mensaje.textContent = 'Por favor ingresa un numero de telefono valido (8 a 10 digitos)';
        mensaje.className = 'Mensaje error';
    }
});