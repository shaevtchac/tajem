import { Splide } from '@splidejs/splide';

const splide = new Splide('.splide', { arrows: false });
splide.mount();

// _______________________________________________________________ menu _______________________________________________________________

// _________ button
const menuButton = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', function () {
  this.classList.toggle('is-active');
  nav.classList.toggle('is-open');
  const ariaExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !ariaExpanded);
  menuItems.classList.toggle('hidden');
});

// ________ observer
const divTrigger = document.createElement('div');
divTrigger.setAttribute('data-menu-trigger', '');
document.body.prepend(divTrigger);

const menuObserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      nav.classList.remove('reduced');
    } else {
      nav.classList.add('reduced');
    }
  },
  { rootMargin: `100px 0px 0px 0px` }
);

menuObserver.observe(divTrigger);
menuItems.addEventListener('click', () => {
  menuButton.classList.remove('is-active');
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', false);
  menuItems.classList.add('hidden');
});

// _______________________________________________________________ animations _______________________________________________________________

const animatedElements = document.querySelectorAll('[data-animation]');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const {
      animation,
      duration = '500ms',
      'timing-function': timingFunction = 'ease-in',
      delay = '0ms',
      'iteration-count': iterationCount = '1',
      direction = 'normal',
      'fill-mode': fillMode = 'backwards',
    } = entry.target.dataset;
    if (entry.isIntersecting) {
      entry.target.style.animation = `${animation} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode}`;
    } else {
      entry.target.style.animation = 'none';
    }
  });
});

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});
