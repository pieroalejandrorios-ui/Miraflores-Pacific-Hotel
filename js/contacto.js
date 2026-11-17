// Formulario de contacto (contacto.html): muestra los datos en una ventana flotante
const formularioContacto = document.getElementById('contactoSoporte');
const ventanaFlotante = document.getElementById('ventanaFlotante');
const datosEnviados = document.getElementById('datosEnviados');
const botonCerrarVentana = document.getElementById('cerrarVentana');

// Construye la lista de datos usando textContent (evita inyectar HTML)
function mostrarDatos(datos) {
    datosEnviados.innerHTML = '';
    datos.forEach(([etiqueta, valor]) => {
        const fila = document.createElement('p');
        const negrita = document.createElement('strong');
        negrita.textContent = etiqueta + ': ';
        fila.append(negrita, valor || '(no indicado)');
        datosEnviados.appendChild(fila);
    });
    ventanaFlotante.classList.remove('oculto');
}

function cerrarVentanaFlotante() {
    ventanaFlotante.classList.add('oculto');
}

function enviarContacto(evento) {
    evento.preventDefault();
    const selectMotivo = document.getElementById('motivo');
    mostrarDatos([
        ['Nombre completo', document.getElementById('nombre').value],
        ['Correo', document.getElementById('email').value],
        ['Motivo', selectMotivo.options[selectMotivo.selectedIndex].text],
        ['N° de reserva', document.getElementById('reserva').value],
        ['Descripción', document.getElementById('mensaje').value]
    ]);
    formularioContacto.reset();
}

if (formularioContacto && ventanaFlotante) {
    formularioContacto.addEventListener('submit', enviarContacto);
    botonCerrarVentana.addEventListener('click', cerrarVentanaFlotante);
    ventanaFlotante.addEventListener('click', (e) => {
        if (e.target === ventanaFlotante) cerrarVentanaFlotante();
    });
}
