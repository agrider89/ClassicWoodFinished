
// Menu Zoom In JS
const menuOpen = '[data-open]';
const menuClose = '[data-close]';
const visible = 'visible';

const openMenu = document.querySelectorAll(menuOpen);
const closeMenu = document.querySelectorAll(menuClose);

for(const el of openMenu) {
  el.addEventListener('click', function() {
    const menuId = this.dataset.open;
    document.getElementById(menuId).classList.add(visible)
  })
}

for(const el of closeMenu) {
  el.addEventListener('click', function() {
    const menuId = this.dataset.close;
    this.parentElement.classList.remove(visible);
    this.parentElement.parentElement.classList.remove(visible);
  })
}
