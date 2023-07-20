
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
