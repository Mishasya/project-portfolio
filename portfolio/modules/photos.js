const portfolioContainer = document.querySelector('.portfolio__tabs-btns');
const portfolioBtns = portfolioContainer.querySelectorAll('.portfolio__btn');
const portfolioImages = document.querySelectorAll('.portfolio__tabs-img');

const changeImage = (evt) => {
  let target = evt.target;

  portfolioBtns.forEach((el) => {
    el.classList.remove('btn--active');
    target.classList.add('btn--active');
  });

  portfolioImages.forEach((img, index) => {
    img.src = `assets/img/${target.dataset.season}/${index + 1}.jpg`;
  });
}

portfolioContainer.addEventListener('click', changeImage);