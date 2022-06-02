const dropdown__value = document.querySelector(".dropdown__value");
const dropdown__list = document.querySelector(".dropdown__list");
const dropdown__links = Array.from(document.querySelectorAll(".dropdown__link"));

function ShowList() {
   dropdown__list.classList.toggle('dropdown__list_active');
}

dropdown__links.forEach(link => {
   link.onclick = (e) => {
      e.preventDefault();
      dropdown__value.textContent = e.target.textContent;
      dropdown__list.classList.remove('dropdown__list_active');
   }
});

dropdown__value.addEventListener("click", ShowList);