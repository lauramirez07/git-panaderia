Sabor a Colores 🎨🧁

Página web estática de información y actualizaciones para Sabor a Colores, una repostería artesanal. Es un sitio 100% frontend: no usa base de datos, backend ni frameworks — solo HTML, CSS y JavaScript.

Contenido del sitio
Inicio — presentación de la marca.
Nosotros — historia y valores del obrador.
Novedades — feed de actualizaciones (lanzamientos, cambios de horario, talleres, avisos).
Menú destacado — catálogo de productos con precios de referencia.
Horario y ubicación — horario de atención y dirección del punto de venta.
Contacto — enlaces a WhatsApp, Instagram, correo y un formulario de contacto (solo interfaz, sin envío real).
Estructura de archivos
├── index.html    # Estructura y contenido de la página
├── styles.css    # Estilos (paleta de color, tipografía, layout, animaciones)
├── script.js     # Menú móvil, revelado al hacer scroll y formulario de contacto
└── README.md     # Este archivo

Los tres archivos deben estar en la misma carpeta: index.html los enlaza por ruta relativa (styles.css y script.js).

Cómo usarlo

No requiere instalación ni servidor. Basta con abrir index.html en el navegador:

Descarga o clona los 3 archivos en una misma carpeta.
Haz doble clic en index.html, o ábrelo con "Abrir con → navegador".
(Opcional) Para verlo con recarga en vivo durante la edición, sirve la carpeta con cualquier servidor estático, por ejemplo:
bash
   npx serve .
   # o
   python3 -m http.server 8000
Personalización

Todo el contenido es de ejemplo y está pensado para editarse directamente en index.html:

Qué cambiar	Dónde
Dirección y horario	Sección #horario
Teléfono de WhatsApp, Instagram, correo	Sección #contacto (lista .social-list)
Productos y precios del menú	Sección #menu (tarjetas .menu-card)
Avisos y novedades	Sección #novedades (lista .feed)
Colores de marca	Variables :root al inicio de styles.css (--raspberry, --mango, --pistachio, --blueberry, --lemon, --grape)
Tipografías	Import de Google Fonts en <head> de index.html + variables de fuente en styles.css
Formulario de contacto

El formulario de la sección Contacto es solo de interfaz: al enviarlo, script.js muestra un mensaje de confirmación en pantalla, pero no envía el mensaje a ningún lado, porque el sitio no tiene backend ni base de datos. Para recibir los mensajes de verdad, conecta el formulario a un servicio externo, por ejemplo:

Formspree
EmailJS
Un backend propio (Node, PHP, etc.) que reciba el POST del formulario.
Accesibilidad y rendimiento
Navegación con foco visible (:focus-visible) en enlaces y botones.
Respeta prefers-reduced-motion para desactivar animaciones si el usuario lo prefiere.
Diseño responsive: el menú de navegación colapsa en un menú hamburguesa en pantallas angostas.
Sin dependencias externas más allá de la fuente de Google Fonts (Fredoka + Work Sans).
Licencia

Contenido de ejemplo para uso libre y edición del negocio "Sabor a Colores".