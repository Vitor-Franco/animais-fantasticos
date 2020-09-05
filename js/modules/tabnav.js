export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-menu="animais"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
