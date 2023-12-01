// Botones animados hover
const hoverElements = document.querySelectorAll('.hover-effect');

hoverElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hover-effect');
  });

  element.addEventListener('mouseout', () => {
    element.classList.remove('hover-effect');
  });
});

// whatsapp

function sendWhatsAppMessage() {
  var phoneNumber = '+5491162147121';
  var message = '¡Hola! Estoy interesado en tener una reunión con vos.';
  var formattedPhoneNumber = phoneNumber.replace(/[-()\s]/g, '');
  var whatsappLink = 'https://wa.me/' + formattedPhoneNumber + '?text=' + encodeURIComponent(message);
  window.open(whatsappLink);
}

