# Miraflores Pacific Hotel

Sitio estático en español, construido exclusivamente con HTML y CSS.

## Estructura

- src/templates/: plantillas que componen cada página mediante inclusiones.
- src/modules/: módulos HTML de portada, presentación, habitaciones, servicios, ubicación, contacto, reclamaciones y acceso; incluye fragmentos compartidos.
- src/css/: estilos separados por módulo; responsive.css conserva los ajustes de pantalla en su posición original.
- src/manifest.json: páginas de salida y orden de armado de los módulos CSS.
- scripts/build.cjs: armado local, sin dependencias externas.
- index.html y pages/: páginas finales generadas, listas para abrir o publicar.
- assets/css/style.css: CSS final generado a partir de los módulos.
- assets/images/: logo y fotografías originales.

Abre index.html en un navegador o sirve esta carpeta con un servidor estático. El navegador utiliza exclusivamente HTML y CSS; no ejecuta JavaScript.

## Edición por módulos

Edita el HTML en src/modules/ y los estilos en src/css/. Las plantillas de src/templates/ solo organizan las inclusiones y las etiquetas envolventes. Los fragmentos se conservan con su indentación original porque el armado concatena el código sin reformatearlo.

Desde la carpeta del repositorio, genera las páginas y el CSS finales con Node.js:

```sh
node scripts/build.cjs
```

Para comprobar que los archivos generados coinciden con las fuentes:

```sh
node scripts/build.cjs --check
```

No edites directamente index.html, pages/ ni assets/css/style.css: el próximo armado los sobrescribirá. No hace falta ejecutar el armado para visitar el sitio: las salidas ya están incluidas.

El orden de los módulos CSS en el manifiesto conserva la cascada original. Los archivos finales mantienen exactamente el HTML y las reglas CSS anteriores a esta reorganización.

## Funcionalidad

La consulta por correo abre la aplicación de correo del visitante. El correo se conserva del sitio original y debe verificarse con el hotel antes de uso comercial. Los números 170, 200 y 280 se mantienen como nombres de las habitaciones; no se presentan como tarifas confirmadas.

El envío de reclamaciones y el inicio de sesión necesitan un servicio de servidor. Se indica explícitamente que no están habilitados, sin simular envíos ni almacenar datos. Para registrar una reclamación se indica acudir a recepción.

Publicación: la raíz del repositorio contiene index.html, apta para un alojamiento estático.
