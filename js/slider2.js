document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonials__slide');
    const dots = document.querySelectorAll('.testimonials__dot');
    let currentIndex = 0;
    const slideInterval = 5000; // Change slide every 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    showSlide(currentIndex);
    setInterval(nextSlide, slideInterval); // Automatically switch slides every 5 seconds
});