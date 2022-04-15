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


































//let slide = 0;

//arrowRight.onclick = () => {
//   if (slide == (slides.length - 1)) {
//      slides[0].classList.add('slider__item_active');
//      slides[slide].classList.remove('slider__item_active');
//      dots[0].classList.add('slider__dot_active');
//      dots[slide].classList.remove('slider__dot_active');
//      slide = 0;
//   } else {
//      slides[slide + 1].classList.add('slider__item_active');
//      slides[slide].classList.remove('slider__item_active');
//      dots[slide + 1].classList.add('slider__dot_active');
//      dots[slide].classList.remove('slider__dot_active');
//      slide++;
//   }
//}

//arrowLeft.onclick = () => {
//   if (slide == 0) {
//      slides[slides.length - 1].classList.add('slider__item_active');
//      slides[0].classList.remove('slider__item_active');
//      dots[slides.length - 1].classList.add('slider__dot_active');
//      dots[0].classList.remove('slider__dot_active');
//      slide = slides.length - 1;
//   } else {
//      slides[slide - 1].classList.add('slider__item_active');
//      slides[slide].classList.remove('slider__item_active');
//      dots[slide - 1].classList.add('slider__dot_active');
//      dots[slide].classList.remove('slider__dot_active');
//      slide -= 1;
//   }
//}

//dots.forEach((element, index, arr) => {
//   let counter = 0;
//   element.onclick = () => {
//      //if (slide == (arr.length - 1)) {
//      //   slides[0].classList.add('slider__item_active');
//      //   slides[slide].classList.remove('slider__item_active');
//      //   dots[0].classList.add('slider__dot_active');
//      //   dots[slide].classList.remove('slider__dot_active');
//      //   slide = 0;
//      //} else {
//      //   slides[index].classList.add('slider__item_active');
//      //   slides[index].classList.remove('slider__item_active');
//      //   dots[index].classList.add('slider__dot_active');
//      //   dots[index].classList.remove('slider__dot_active');
//      //   slide++;
//      //}
//      if (counter == 0) {
//         slides[0].classList.remove('slider__item_active');
//         dots[0].classList.remove('slider__dot_active');
//         slides[index].classList.add('slider__item_active');
//         dots[index].classList.add('slider__dot_active');
//         counter = dots[index];
//      } else {
//         dots[counter].classList.remove('slider__dot_active');
//         slides[counter].classList.remove('slider__item_active');
//         slides[index].classList.add('slider__item_active');
//         dots[index].classList.add('slider__dot_active');
//      }
//   }
//})

