document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.querySelector('.hero__subtitle');
    const heroImage = document.querySelector('.hero__image');
  
    const subtitleRect = subtitle.getBoundingClientRect();
    const heroImageRect = heroImage.getBoundingClientRect();
    // const cirle = subtitle.
    console.log(subtitleRect)
    // console.log(heroImageRect)
  
    // Перевірка на перетин тексту і зображення
    if (
      subtitleRect.top < heroImageRect.bottom &&
      subtitleRect.bottom > heroImageRect.top &&
      subtitleRect.left < heroImageRect.right &&
      subtitleRect.right > heroImageRect.left
    ) {
      subtitle.classList.add('on-image');
    } else {
      subtitle.classList.remove('on-image');
    }
  });