const navMenu = document.getElementById("nav-menu");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const faqBtns = Array.from(document.querySelectorAll(".faq-btn"));

const setUp = () => {
     openMenuBtn.addEventListener("click", () => {
          navMenu.classList.remove("translate-x-full");
          overlay.classList.remove("hidden");
     });

     closeMenuBtn.addEventListener("click", closeMenu);

     navLinks.forEach((navLink) => {
          navLink.addEventListener("click", closeMenu);
     });

     function closeMenu() {
          navMenu.classList.add("translate-x-full");
          overlay.classList.add("hidden");
     }

     faqBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
               btn.classList.toggle("bg-blue-600");
               btn.classList.toggle("text-white");
               const icon = btn.querySelector("i");
               icon.className =
                    icon.className === "bi bi-plus"
                         ? "bi bi-dash"
                         : "bi bi-plus";
               const answer = btn.parentElement.nextElementSibling;
               answer.classList.toggle("overflow-hidden");
               answer.classList.toggle("h-0");
          });
     });
};

window.addEventListener("load", setUp);
