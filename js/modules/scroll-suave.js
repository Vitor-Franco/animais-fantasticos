export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="menutop"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    // section.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    // });

    // Forma alternativa
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((links) => {
    links.addEventListener('click', scrollToSection);
  });
}
