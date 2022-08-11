let body = document.body;
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__nav');
let openBtnAria = 'Open menu';
let closeBtnAria = 'Close menu';

if (burger) {
  const toggleMenu = () => {
    body.classList.toggle('open-menu');
    body.classList.toggle('scroll-lock');
    burger.classList.toggle('burger--active');
  };

  const toggleAria = () => {
    let burgerLabel = burger.getAttribute('aria-label');

    if (burgerLabel === openBtnAria) {
      burger.setAttribute('aria-label', closeBtnAria);
    } else {
      burger.setAttribute('aria-label', openBtnAria);
    }
  };

  burger.addEventListener('click', () => {
    toggleAria();
    toggleMenu();
  });

  nav.addEventListener('click', (evt) => {
    let target = evt.target;
    if (target.classList.contains('nav__link')) {
      body.classList.remove('open-menu');
      body.classList.remove('scroll-lock');
      burger.classList.remove('burger--active');
    }
  });
}
