const searchEl = document.querySelector('.search');
const inputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  inputEl.focus();
});

inputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  inputEl.setAttribute('placeholder', '통합검색');
});

inputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  inputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소, 지속시간(초), 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);
// _.throttle(함수, 시간(ms))

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
