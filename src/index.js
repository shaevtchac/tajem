import { Splide } from '@splidejs/splide';

const splide = new Splide('.splide', {
  arrows: false,
});
splide.mount();

const splideTestimonials = new Splide('#carousel-testimonials', {
  type: 'fade',
  rewind: true,
  pagination: false,
  arrows: false,
});

const splideTestimonialsThumbs = new Splide('#carousel-testimonials-thumbs', {
  fixedWidth: 50,
  fixedHeight: 50,
  breakpoints: {
    359: {
      fixedWidth: 35,
      fixedHeight: 35,
    },
  },
  rewind: true,
  pagination: false,
  isNavigation: true,
  focus: 'center',
  arrowPath:
    'M 10.24901,1.4752837 C 9.9149159,1.139629 9.9133547,0.59243365 10.245887,0.25443712 10.57842,-0.0835594 11.120151,-0.08512059 11.454244,0.25131475 L 30.588126,19.388319 c 0.334094,0.335655 0.335655,0.88285 0.0031,1.220847 L 11.454244,39.749292 a 0.84881622,0.84881622 0 0 1 -1.208357,-0.0039 c -0.3325323,-0.337996 -0.3309711,-0.884411 0.0031,-1.220066 L 28.770907,20.000304 Z',
});

splideTestimonials.sync(splideTestimonialsThumbs);
splideTestimonials.mount();
splideTestimonialsThumbs.mount();
splideTestimonialsThumbs.go(2);

// ______________________________________________________________ works modal carousel ______________________________________________________________

const images = document.querySelectorAll('.works-image');
const worksCarouselList = document.getElementById('works-carousel-list');
const worksModal = document.getElementById('works-modal');
let worksCarousel;
images.forEach((image) => {
  const li = document.createElement('li');
  li.classList = 'splide__slide';
  const newImage = image.cloneNode(true);
  li.append(newImage);
  worksCarouselList.append(li);
  image.addEventListener('click', function () {
    if (window.innerWidth < 515) return;
    worksCarousel = new Splide('#works-modal-carousel');
    worksModal.showModal();
    worksCarousel.mount();
    worksCarousel.go(Array.from(images).indexOf(this));
  });
});
document.getElementById('works-modal-close').addEventListener('click', () => {
  worksModal.close();
});

worksModal.addEventListener('close', () => worksCarousel.destroy());

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
