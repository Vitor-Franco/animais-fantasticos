import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumento padrão
    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownMenu e adiciona
  // a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona eventos para cada item
  addDropdownMenusEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((action) => {
        menu.addEventListener(action, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      console.log('entra?');
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
