// Intranet (intranet.html): protección de acceso y cierre de sesión con confirmación
const botonCerrarSesion = document.getElementById('cerrarSesion');

// Si no se inició sesión, se devuelve al login
if (sessionStorage.getItem('sesionActiva') !== 'true') {
    window.location.href = 'login.html';
}

function cerrarSesion() {
    const desea = confirm('¿Realmente desea cerrar sesión?');
    if (desea) {
        sessionStorage.removeItem('sesionActiva');
        window.location.href = 'login.html';
    }
}

if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener('click', cerrarSesion);
}
