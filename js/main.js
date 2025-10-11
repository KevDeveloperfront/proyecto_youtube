// main.js
document.addEventListener('DOMContentLoaded', () => {
  // toggle de tema claro/oscuro
  const toggleButton = document.getElementById('theme-toggle');
  
  if (!toggleButton) {
    console.error('Botón con ID "theme-toggle" no encontrado');
    return;
  }

  // Carga el modo guardado (si existe)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  // Alterna el modo al hacer clic
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLightMode = document.body.classList.contains('light');
    toggleButton.innerHTML = isLightMode 
      ? '<i class="fa-solid fa-moon"></i>' 
      : '<i class="fa-solid fa-sun"></i>';
    // Guarda la preferencia
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  });

  // menú toggle, para mostrar/ocultar sidebar en pantallas pequeñas
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      // Toggle de clase 'open' en el sidebar para mostrar/ocultar
      sidebar.classList.toggle('open');
      // Toggle de animación en el botón (hamburguesa a X)
      menuToggle.classList.toggle('open');
    });
  } else {
    console.error('Elementos para menú toggle no encontrados');
  }
});