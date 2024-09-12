// jogo.js

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Atualiza o carrossel para o início
    updateCarousel();
});
