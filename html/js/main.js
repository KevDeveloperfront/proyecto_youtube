// main.js
document.addEventListener('DOMContentLoaded', () => {
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
});