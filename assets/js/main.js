// ================ Script for mobile menu ================
const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");
const overlay = document.querySelector(".header__overlay");
const body = document.body;

// Toggle sidebar and overlay
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("header__nav--active");
  overlay.classList.toggle("header__overlay--active");
  body.classList.toggle("body--menu-open"); // Disable scroll
});

// Close menu and overlay when clicking outside the sidebar or on links
overlay.addEventListener("click", closeMenu);
navMenu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Function to close the menu
function closeMenu() {
  navMenu.classList.remove("header__nav--active");
  overlay.classList.remove("header__overlay--active");
  body.classList.remove("body--menu-open"); // Re-enable scroll
}

//  ================ Script for FAQs Section  ================
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");

  question.addEventListener("click", () => {
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded attribute
    question.setAttribute("aria-expanded", !isExpanded);

    // Show or hide the answer
    answer.style.display = isExpanded ? "none" : "block";
  });
});

//  ================   Pop up modal ================
const modal = document.getElementById("login-modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  body.classList.toggle("body--menu-open");
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  body.classList.remove("body--menu-open");
});
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    body.classList.remove("body--menu-open");
  }
});
