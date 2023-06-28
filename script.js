// Obtenemos todos los elementos con la clase 'gestor-info'
const gestorInfoElements = document.querySelectorAll('.gestor-info');

// Agregamos el evento 'mouseover' a cada elemento
gestorInfoElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    // Agrandamos el elemento actual de forma más lenta
    element.style.transition = 'transform 0.3s ease';
    element.style.transform = 'scale(1.1)';
  });

  element.addEventListener('mouseout', () => {
    // Restauramos el tamaño original solo si el elemento no tiene el foco
    if (!element.matches(':hover')) {
      // Restauramos la transición a la velocidad original
      element.style.transition = 'transform 0.5s ease';
      element.style.transform = 'scale(1)';
    }
  });
});
