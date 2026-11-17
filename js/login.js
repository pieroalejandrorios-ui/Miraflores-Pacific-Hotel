// Inicio de sesión (login.html)
const CORREO_VALIDO = 'admin@mail.com';
const CLAVE_VALIDA = '123456';

// Valida las credenciales ingresadas
function validarCredenciales(correo, clave) {
    return correo === CORREO_VALIDO && clave === CLAVE_VALIDA;
}

// Si son correctas redirige a la intranet; si no, muestra mensaje en consola
function iniciarSesion(evento) {
    evento.preventDefault();
    const correo = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value;

    if (validarCredenciales(correo, clave)) {
        sessionStorage.setItem('sesionActiva', 'true');
        window.location.href = 'intranet.html';
    } else {
        console.log('Credenciales no válidas');
    }
}

const formularioLogin = document.getElementById('formularioLogin');
if (formularioLogin) {
    formularioLogin.addEventListener('submit', iniciarSesion);
}
