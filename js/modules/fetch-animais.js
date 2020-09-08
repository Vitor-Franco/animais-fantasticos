import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // Com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // Após a transformação, ativa as funções
      // Para preencher e animar os números.
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (err) {
      console.log(err);
    }
  }

  return criarAnimais();
}
