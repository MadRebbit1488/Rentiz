// Отримуємо кнопку
const burger = document.querySelector('.menu-icon');
// Отримуємо меню
const menu = document.querySelector('.menu');
// Отримуємо весь документ
const body = document.body

// Якщо є burger && menu, то на них навішується обробник подій який при click навушує на них клас _active
if (burger && menu) {
  burger.addEventListener('click', () => {
    // toggle - натиснули додали, натиснули прибрали
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })
}

// ----Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
  // Якщо перевірка показує що в нас є filter, то ми отримуємо всі три секції фільтру, окрім кнопки пошуку
  const items = filter.querySelectorAll('.block-filter');

  items.forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');
      // Якщо натиснутий елемент в собі має клас block-filter__item, то при натисканні на ного він стає в текст кнопки
      if (event.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent = event.target.textContent;
      }
    })
  })
}



// ----Slider
const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  // Слайдер буде крутитись безкінця
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Дає змогу налаштувати слайдер на різні дозволи екрану
  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    }
  }
});

