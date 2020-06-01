// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');



// Event listeners
eventListeners();

function eventListeners() {
    // inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // campos del fomulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // boton de enviar el submit
    btnEnviar.addEventListener('click', enviarEmail);

    // boton de reset
    resetBtn.addEventListener('click', resetarFormulario);
}



// Funciones

function inicioApp() {
    // deshabilitar el envío
    btnEnviar.disabled = true;
}

// Valida que el campo tenga algo escirto
function validarCampo() {
    
    // se valida la longitud del texto y que no esté vacío
    validarLongitd(this);

    // validar sólamente el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        };
    }
}

// Resetear el fomulario
function resetarFormulario(e) {
    formularioEnviar.reset();
    
    e.preventDefault();
}


// Cuando se envia el correo
function enviarEmail(e) {
    // Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    
    // Gif que envía mail
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar spinner y mostrar enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild( enviado );

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);

    e.preventDefault();
}


// Verifica la longitud del texto en los campos
function validarLongitd(campo) {

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}