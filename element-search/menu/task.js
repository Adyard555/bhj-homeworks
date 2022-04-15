const menuLink = Array.from(document.querySelectorAll(".menu__item"));

menuLink.forEach(element => {
   element.onclick = () => {
      document.querySelectorAll(".menu_sub").forEach(element => {
         element.classList.remove('menu_active')
      });
      element.querySelector(".menu_sub").classList.toggle('menu_active');
   }
});

const menuLinkFooter = Array.from(document.querySelectorAll(".menu__item__footer"));

menuLinkFooter.forEach(element => {
   element.onclick = () => {
      document.querySelectorAll(".menu_sub__footer").forEach(element => {
         element.classList.remove('menu_active')
      });
      element.querySelector(".menu_sub__footer").classList.toggle('menu_active');
   }
});

document.onclick = (event) => {
   if (event.target.className !== 'menu__item') {
      document.querySelectorAll(".menu_sub").forEach(element => {
         element.classList.remove('menu_active')
      });
   }

   if (event.target.className !== 'menu__item__footer')
      document.querySelectorAll(".menu_sub__footer").forEach(element => {
         element.classList.remove('menu_active')
      });
}