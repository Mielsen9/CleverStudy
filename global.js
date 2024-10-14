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
toggleContent('show-more-btn-reviews', 'reviwes__img-box', 'expanded-review', 'Більше відгуків', 'Менше відгуків');


document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if(targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open')
  }
  
}

