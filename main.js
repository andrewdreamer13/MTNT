"use strict";
// Header burger
burger();

function burger() {
  const burgerBtn = document.querySelector('.header__burger');
  burgerBtn.addEventListener('click', () => {
    document.querySelector('.header__list').classList.toggle('header__list-transform');
    document.querySelector('.header__span-1').classList.toggle('header__span-1-transform');
    document.querySelector('.header__span-2').classList.toggle('header__span-2-transform');
    document.querySelector('.header__span-3').classList.toggle('header__span-3-transform');
    document.querySelectorAll('.header__item').forEach((element) => {
      element.classList.toggle('header__item-transform');
    })
    document.body.classList.toggle('no-scroll');
  })
}

// transform for hike content
hikeTransform();

function hikeTransform() {
  document.addEventListener('scroll', () => {
    const hikeContents = document.querySelectorAll('.hike__content');

    function showItem() {
      hikeContents.forEach((item) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = item.offsetTop + (item.offsetHeight / 2);

        if (windowCenter >= scrollOffSet) {
          item.classList.add('hike__content-transform');
        } else {
          item.classList.remove('hike__content-transform');
        }

      })
    }
    showItem();
  })
} // end of transform for hike content

// transform for hike img
imgTransform();

function imgTransform() {
  document.addEventListener('scroll', () => {
    const hikeImages = document.querySelectorAll('.hike__img');

    function showImg() {
      hikeImages.forEach((img) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = img.offsetTop + (img.offsetHeight / 2);

        if (windowCenter >= scrollOffSet) {
          img.classList.add('hike__img-transform');
        } else {
          img.classList.remove('hike__img-transform');
        }

      })
    }
    showImg();
  })
} // end of transform 

// change background
changeBackgruond()

function changeBackgruond() {
  const backgroundButton = document.querySelector('.change-color');
  backgroundButton.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      document.querySelector('.header__list').classList.toggle('change-bg-list');
    }
    document.body.classList.toggle('light-theme-bg');
    document.body.classList.toggle('light-theme-color');
    document.querySelectorAll('body a').forEach((link) => {
      link.classList.toggle('light-theme-color');
      link.classList.toggle('link-border-color');
    })
    document.querySelectorAll('body a .hike__span').forEach((link) => {
      link.classList.toggle('light-theme-color');

    })
    document.querySelectorAll('.header__span').forEach((span) => {
      span.classList.toggle('change-bg');
      document.querySelectorAll('.svg-icon ').forEach((icon) => {
        icon.classList.toggle('change-fill');
      })
    })
  })
} // end of change background