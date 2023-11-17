const hoverElements = document.querySelectorAll('.hover-effect');

hoverElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hover-effect');
  });

  element.addEventListener('mouseout', () => {
    element.classList.remove('hover-effect');
  });
});
