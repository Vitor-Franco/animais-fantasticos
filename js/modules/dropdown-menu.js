import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenu.forEach((menu) => {
    ['touchstart', 'click'].forEach((action) => {
      menu.addEventListener(action, handleClick);
    });
  });
}
