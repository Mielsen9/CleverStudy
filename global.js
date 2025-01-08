function toggleContent(buttonId, containerId, expandedClass, textShowMore, textShowLess) {
  document.getElementById(buttonId).addEventListener('click', function() {
      const container = document.getElementById(containerId);
      container.classList.toggle(expandedClass);

      if (container.classList.contains(expandedClass)) {
          this.textContent = textShowLess;
      } else {
          this.textContent = textShowMore;
      }
  });
}

toggleContent('show-more-btn', 'opis__list', 'expanded', 'Показати ще', 'Показати менше');
toggleContent('show-more-btn-answer', 'answer__list', 'expanded-answer', 'Більше відгуків', 'Менше відгуків');


document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if(targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open')
  }

}

document.addEventListener('DOMContentLoaded', function () {
    const opisItems = document.querySelectorAll('.opis__item'); // Вибираємо всі елементи з класом .opis__item

    opisItems.forEach(item => {
        item.addEventListener('click', function () {
            const helpList = item.querySelector('.opis__help-list'); // Знаходимо відповідний .opis__help-list

            // Перемикаємо клас visible при натисканні на .opis__item
            helpList.classList.toggle('visible');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const opisItems = document.querySelectorAll('.answer__item'); // Вибираємо всі елементи з класом .opis__item

    opisItems.forEach(item => {
        item.addEventListener('click', function () {
            const helpList = item.querySelector('.answer__list'); // Знаходимо відповідний .opis__help-list

            // Перемикаємо клас visible при натисканні на .opis__item
            helpList.classList.toggle('visible');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const answerItems = document.querySelectorAll('.answer__item');

    answerItems.forEach(item => {
        // Додаємо обробник події на клік
        item.addEventListener('click', function () {
            // Перемикаємо клас .clicked на самій .answer__item для зміни фону та висоти
            item.classList.toggle('clicked');

            // Перемикаємо клас .clicked на .answer__text для зміни стилів шрифта
            const answerText = item.querySelector('.answer__text');
            answerText.classList.toggle('clicked');
        });
    });
});
