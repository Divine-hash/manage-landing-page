export {initializeMenu};

function initializeMenu(menuBtn) {
  menuBtn.addEventListener('click', onClick);
  menuBtn.addEventListener('keydown', onKeyDown);
}

function onClick() {
  const expanded = this.getAttribute('aria-expanded') == 'false';
  this.setAttribute('aria-expanded', expanded);
}

function onKeyDown(event) {
  if (event.code != 'Enter') return;
  this.addEventListener('transitionend', () => {
    if (this.getAttribute('aria-expanded') == 'false') return;
    const navListItem = document.querySelector('[data-id="nav-list"] li a');
    navListItem.focus();
  }, {once: true})
}

