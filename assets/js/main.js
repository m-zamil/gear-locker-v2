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

//====================== Script for Nav Menu Dropdown ====================== //

document.querySelectorAll(".dropdown__tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    // Remove active states
    tab
      .closest(".dropdown__tabs")
      .querySelectorAll(".dropdown__tab")
      .forEach((t) => t.classList.remove("dropdown__tab--active"));
    tab
      .closest(".dropdown")
      .querySelectorAll(".dropdown__panel")
      .forEach((p) => p.classList.remove("dropdown__panel--active"));

    // Activate clicked tab + panel
    tab.classList.add("dropdown__tab--active");
    document.getElementById(target).classList.add("dropdown__panel--active");
  });
});

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

const openModalBtns = document.querySelectorAll("[data-modal-target]");
const closeModalBtns = document.querySelectorAll("[data-close]");

// Open modal
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.modalTarget);
    if (target) {
      target.style.display = "flex";
      body.classList.add("body--menu-open");
    }
  });
});

// Close modal
closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
    body.classList.remove("body--menu-open");
  });
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    body.classList.remove("body--menu-open");
  }
});
