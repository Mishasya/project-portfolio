import * as storage from  '../modules/changeLang.js';
const html = document.querySelector('html');
const schemeBtn = document.querySelector('.scheme-btn');
let scheme = 'dark';

function setLocalStorage(data, value) {
  localStorage.setItem(data, value);
}

const changeScheme = () => {
  if(!html.classList.contains('light-scheme')) {
    html.classList.add('light-scheme');
    scheme = 'light';
  } else {
    html.classList.remove('light-scheme');
    scheme = 'dark';
  }
  setLocalStorage('scheme', scheme);
};

schemeBtn.addEventListener('click', changeScheme);

function getLocalStorage () {
  if (localStorage.getItem('scheme')) {
    scheme = localStorage.getItem('scheme');
    if(scheme === 'light') {
      changeScheme()
    }
  }
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);