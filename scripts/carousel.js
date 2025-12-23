let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function mostrarSlide(index) {
  const offset = index * -100; // Move o carrossel horizontalmente
  document.querySelector('.carousel-items').style.transform = `translateX(${offset}%)`;
}

function mudarSlide(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  mostrarSlide(slideIndex);
}

// Inicia com o primeiro slide visível
mostrarSlide(slideIndex);
