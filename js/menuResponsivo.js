// Menú responsivo: muestra u oculta la navegación en pantallas pequeñas
const botonMenu = document.getElementById('botonMenu');
const navegacionPrincipal = document.getElementById('navegacionPrincipal');

function alternarMenu() {
    const estaAbierto = navegacionPrincipal.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', estaAbierto);
}

if (botonMenu && navegacionPrincipal) {
    botonMenu.addEventListener('click', alternarMenu);
}
