// Menú móvil
  const toggle = document.getElementById('menuToggle');
  const paletteNav = document.getElementById('paletteNav');
  toggle.addEventListener('click', () => {
    const isOpen = paletteNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  paletteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      paletteNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Revelado suave al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Formulario de contacto (solo frontend, sin backend / base de datos)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    status.textContent = `¡Gracias, ${name || 'amig@'}! Tu mensaje quedó listo — conecta este formulario a tu correo o WhatsApp para recibirlo de verdad.`;
    status.classList.add('ok');
    form.reset();
  });
