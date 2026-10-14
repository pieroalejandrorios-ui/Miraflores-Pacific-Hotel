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

El orden de los módulos CSS en el manifiesto define la cascada. El armado concatena las fuentes sin transformar las reglas ni las estructuras HTML.

## Diseño

La portada utiliza la fotografía original aportada en assets/images/portada-hotel.webp. Los estilos combinan tonos azul profundo, marfil y dorado; los títulos usan Palatino y los textos Segoe UI, con alternativas locales según el sistema. No se descargan fuentes ni librerías de íconos.

El resumen de Nosotros está en src/modules/inicio/nosotros.html, con estilos en src/css/nosotros.css. La página nosotros.html se arma a partir de src/modules/nosotros/, conserva los textos de historia, misión, visión y valores de la actualización reciente de GitHub, y usa src/css/nosotros-pagina.css. Los íconos se dibujan con máscaras SVG declaradas exclusivamente en src/css/iconos.css. La cabecera permanece visible al desplazarse con position: sticky. Los ajustes para móvil y tablet se mantienen en src/css/responsive.css.

## Funcionalidad

La consulta por correo abre la aplicación de correo del visitante. El correo se conserva del sitio original y debe verificarse con el hotel antes de uso comercial. Los números 170, 200 y 280 se mantienen como nombres de las habitaciones; no se presentan como tarifas confirmadas.

El envío de reclamaciones y el inicio de sesión necesitan un servicio de servidor. Se indica explícitamente que no están habilitados, sin simular envíos ni almacenar datos. Para registrar una reclamación se indica acudir a recepción.

Publicación: la raíz del repositorio contiene index.html, apta para un alojamiento estático.
