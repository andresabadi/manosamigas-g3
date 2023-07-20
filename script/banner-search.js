const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

const totalImages = images.length;
const imageWidth = images[0].clientWidth;
let currentIndex = 0;

function moveCarousel() {
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  moveCarousel();
}

// Mostramos la primera imagen
moveCarousel();

// Intervalo para cambiar automáticamente las imágenes cada 3 segundos
setInterval(showNextImage, 3000);

//BUSCADOR//
function searchKeyword() {
  const keyword = document.getElementById('keyword').value.toLowerCase();
  const elementsToSearch = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

  let found = 0;

  elementsToSearch.forEach(element => {
    const text = element.innerText.toLowerCase();
    if (text.includes(keyword)) {
      // Resalta la palabra clave en el texto con una clase CSS
      const highlightedText = text.replace(new RegExp(keyword, 'gi'), `<span class="highlight">${keyword}</span>`);
      element.innerHTML = highlightedText;
      found++;
    }
  });

  if (found === 0) {
    alert('Palabra clave no encontrada.');
  }
}
