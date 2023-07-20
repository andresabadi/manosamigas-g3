

/*describe('searchKeyword_function', () => {

    // Tests that an alert is returned when the keyword input is empty
    it('test_empty_keyword', () => {
        document.body.innerHTML = '<input id="keyword" value="">';
        const alertSpy = jest.spyOn(window, 'alert');
        searchKeyword();
        expect(alertSpy).toHaveBeenCalledWith('Palabra clave no encontrada.');
    });

    // Tests that an alert is returned when the keyword is not found in any element
    it('test_keyword_not_found', () => {
        document.body.innerHTML = '<input id="keyword" value="notfound"><p>some text</p>';
        const alertSpy = jest.spyOn(window, 'alert');
        searchKeyword();
        expect(alertSpy).toHaveBeenCalledWith('Palabra clave no encontrada.');
    });

    // Tests that the keyword is found in an element with no inner text
    it('test_keyword_found_no_inner_text', () => {
        document.body.innerHTML = '<input id="keyword" value="keyword"><img src="image.png">';
        searchKeyword();
        const highlightedText = document.querySelector('img').innerHTML;
        expect(highlightedText).toBeUndefined();
    });

    // Tests that the keyword is found in an element with HTML tags
    it('test_keyword_found_with_html_tags', () => {
        document.body.innerHTML = '<input id="keyword" value="keyword"><h1><span>some</span> text</h1>';
        searchKeyword();
        const highlightedText = document.querySelector('h1').innerHTML;
        expect(highlightedText).toBe('<span class="highlight">keyword</span>');
    });

    // Tests that multiple instances of the keyword in an element are highlighted
    it('test_multiple_instances_of_keyword', () => {
        document.body.innerHTML = '<input id="keyword" value="keyword"><p>some keyword text with keyword</p>';
        searchKeyword();
        const highlightedText = document.querySelector('p').innerHTML;
        expect(highlightedText).toBe('some <span class="highlight">keyword</span> text with <span class="highlight">keyword</span>');
    });

    // Tests that the search is case-insensitive
    it('test_case_insensitive_search', () => {
        document.body.innerHTML = '<input id="keyword" value="KeYwOrD"><p>some text with keyword</p>';
        searchKeyword();
        const highlightedText = document.querySelector('p').innerHTML;
        expect(highlightedText).toBe('some text with <span class="highlight">KeYwOrD</span>');
    });
});*/

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Importar la función searchKeyword
const searchKeyword = require('../script/banner-search.js').default; // Reemplaza con la ruta correcta a tu archivo

// Configurar el entorno simulado del DOM antes de cada prueba
beforeEach(() => {
  const dom = new JSDOM(`
    <body>
      <p>Este es un párrafo de prueba que contiene la palabra clave.</p>
      <h1>Título con la palabra clave.</h1>
    </body>
  `);

  global.document = dom.window.document;
  global.window = dom.window;
});

test('Resalta correctamente la palabra clave en el texto', () => {
  // Ejecutar la función de búsqueda
  searchKeyword();

  // Comprobar si la palabra clave fue resaltada correctamente
  const highlightedElements = document.querySelectorAll('.highlight');
  expect(highlightedElements.length).toBe(2); // Debe haber dos elementos resaltados (p y h1)
});



