var splide = new Splide('.splide', {
  perPage: 4,
  perMove: 1,
  rewind: true,

  gap: 30,
  arrow: 'slider__arrow',
});

splide.mount();

document.addEventListener('scroll', onScroll);

function onScroll(e) {
  const currentPosition = window.scrollY;
  const links = document.querySelectorAll('.header__nav-link');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.header');

  if (currentPosition > 200) {
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
        link.classList.remove('header__nav-link--active');

        if (el.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('header__nav-link--active');
        }
      });
    }
  });
}
