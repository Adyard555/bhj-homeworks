const slides = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
let targetSlide = 0;

const removeClass = (index) => {
   slides[index].classList.remove('slider__item_active');
   dots[index].classList.remove('slider__dot_active');
}

const addClass = (index) => {
   slides[index].classList.add('slider__item_active');
   dots[index].classList.add('slider__dot_active');
}

arrowNext.onclick = () => {
   removeClass(targetSlide);
   if (targetSlide >= slides.length - 1) targetSlide = -1;
   targetSlide++;
   addClass(targetSlide);
}

arrowPrev.onclick = () => {
   removeClass(targetSlide);
   if (targetSlide === 0) targetSlide = slides.length;
   targetSlide--;
   addClass(targetSlide);
}

dots.forEach((item, index) => {
   item.onclick = () => {
      removeClass(targetSlide);
      targetSlide = index;
      addClass(targetSlide);
   }
})