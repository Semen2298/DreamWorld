document.addEventListener('DOMContentLoaded', function() {
  const images = [
    'url(img/promo-1.webp)',
    'url(img/promo-2.webp)',
    'url(img/promo-3.webp)',
    'url(img/promo-4.webp)'
  ];

  let currentIndex = 0;
  const promo = document.querySelector('.promo');

  function changeBackground() {
    promo.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 5000); // Change background every 5 seconds
  changeBackground(); // Initial background change
});
