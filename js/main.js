// Carrusel de habitaciones (index.html)
const carruselTrack = document.getElementById('carruselTrack');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

if (carruselTrack && btnPrev && btnNext) {
    const paso = 315; // ancho de la tarjeta (300px) + separación (15px)

    btnPrev.addEventListener('click', () => {
        carruselTrack.scrollBy({ left: -paso, behavior: 'smooth' });
    });

    btnNext.addEventListener('click', () => {
        carruselTrack.scrollBy({ left: paso, behavior: 'smooth' });
    });
}

// Formulario de contacto (contacto.html): muestra el mensaje de confirmación
const formContacto = document.getElementById('contactoSoporte');
const resultado = document.getElementById('resultado');

if (formContacto && resultado) {
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        resultado.classList.remove('oculto');
        formContacto.reset();
    });
}

// Menú hamburguesa (todas las páginas): se despliega solo en pantallas pequeñas
const cabecera = document.querySelector('.header-principal');
const botonMenu = document.querySelector('.menu-toggle');
const menuPrincipal = document.getElementById('menuPrincipal');

if (cabecera && botonMenu && menuPrincipal) {
    cabecera.classList.add('menu-listo'); // activa los estilos del menú desplegable

    const cambiarMenu = (abrir) => {
        cabecera.classList.toggle('menu-abierto', abrir);
        botonMenu.setAttribute('aria-expanded', String(abrir));
        botonMenu.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
    };

    botonMenu.addEventListener('click', () => {
        cambiarMenu(!cabecera.classList.contains('menu-abierto'));
    });

    // Cierra al elegir una opción
    menuPrincipal.querySelectorAll('a').forEach((enlace) => {
        enlace.addEventListener('click', () => cambiarMenu(false));
    });

    // Cierra con Escape o al tocar fuera del encabezado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') cambiarMenu(false);
    });
    document.addEventListener('click', (e) => {
        if (!cabecera.contains(e.target)) cambiarMenu(false);
    });

    // Si se agranda la ventana, vuelve al menú horizontal
    window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
        if (e.matches) cambiarMenu(false);
    });
}
