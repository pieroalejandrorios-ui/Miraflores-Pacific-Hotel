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
