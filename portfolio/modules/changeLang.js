import getTranslate from '../modules/getTranslate.js';

const toggleLangParent = document.querySelector('.toggle-lang');
let lang = 'en';
let ru = document.querySelector('#ru');

export function setLocalStorage(data, value) {
  localStorage.setItem(data, value);
}

const changeLang = (evt, ) => {
  const target = evt.target;

  if(target.value === 'ru') {
    lang = 'ru';
    setLocalStorage('el', 'ru')
    getTranslate('ru');
  } else {
    lang = 'en';
    setLocalStorage('el', 'en')
    getTranslate('en');
  }
  setLocalStorage('lang', lang);
};

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    getTranslate(lang);
  }

  if (localStorage.getItem('el')) {
    let el = localStorage.getItem('el');
    if(el === 'ru') {
      ru.checked = true;
    } else {
      ru.checked = false;
    }
  
  }
}

window.addEventListener('load', getLocalStorage);
toggleLangParent.addEventListener('change', changeLang);


