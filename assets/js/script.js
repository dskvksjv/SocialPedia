'use strict';

/**навігаційна панель*/

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/*тест кейс*/
const cardButton = document.querySelector('.card-btn');

cardButton.addEventListener('click', function() {
  window.location.href = 'https://example.com/nonexistent-page';
});


const cardBtn = document.querySelector(".card-btn");

cardBtn.addEventListener("click", function() {
  throw new Error("Це намірене викликання помилки для тестування.");
});


/*перемикання панелі навігації*/

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
заголовок і go-top-btn активні
коли вікно прокручується до 400 пікселів
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
