import i18Obj from '../modules/translate.js';

const getTranslate = (lang) => {
  const translatableElements = document.querySelectorAll('[data-translate]');
  
  translatableElements.forEach((el) => {
    el.textContent = i18Obj[lang][el.dataset.translate];
  })
}

export default getTranslate;