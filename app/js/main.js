var splide = new Splide('.splide', {
  perPage: 4,
  perMove: 1,
  rewind: true,
  gap: 30,
  arrow: 'slider__arrow',
  pagination: false,
  breakpoints: {
    850: {
      perPage: 3,
    },
    600: {
      perPage: 2,
    },
    452: {
      perPage: 1,
    },
  },
});

splide.mount();

document.addEventListener('scroll', onScroll);

function onScroll(e) {
  const currentPosition = window.scrollY;
  const links = document.querySelectorAll('.header__menu-link');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.header');

  if (
    currentPosition > 150 ||
    (currentPosition > 50 && document.body.clientWidth < 1083)
  ) {
    header.classList.add('black');
  } else {
    header.classList.remove('black');
  }

  sections.forEach(function (el) {
    if (
      el.offsetTop <= currentPosition &&
      el.offsetTop + el.offsetHeight > currentPosition
    ) {
      links.forEach(function (link) {
        link.classList.remove('header__menu-link--active');

        if (el.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('header__menu-link--active');
        }
      });
    }
  });
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
  link.addEventListener('click', clickHandler);
});

const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

toggle.addEventListener('click', function () {
  nav.classList.toggle('open');
});

function closeMenu() {
  nav.classList.remove('open');
}

window.addEventListener('resize', function () {
  closeMenu();
});

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  let offsetTop = document.querySelector(href).offsetTop;

  closeMenu();

  if (document.body.clientWidth <= 1024) {
    offsetTop -= 80;
  }

  scroll({
    top: offsetTop - 20,
    behavior: 'smooth',
  });
}

const mixer = mixitup('.works__list', {
  animation: {
    easing: 'ease-in-out',
  },
});
