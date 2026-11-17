// Carrusel de habitaciones (index.html)
const carruselTrack = document.getElementById('carruselTrack');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const pasoCarrusel = 315; // ancho de la tarjeta (300px) + separación (15px)

function moverCarrusel(direccion) {
    carruselTrack.scrollBy({ left: direccion * pasoCarrusel, behavior: 'smooth' });
}

if (carruselTrack && btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => moverCarrusel(-1));
    btnNext.addEventListener('click', () => moverCarrusel(1));
}
