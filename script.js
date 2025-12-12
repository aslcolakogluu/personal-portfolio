// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile Menu Toggle
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// Close Navbar on Scroll
window.addEventListener("scroll", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
});

// ScrollReveal Animations
const sr = ScrollReveal({
    distance: "25px",
    duration: 800,
    delay: 150,
    reset: true
});

// Sections Reveal Animations
sr.reveal(".home-text", { origin: "bottom" });
sr.reveal(".about, .experience, .skills, .achievement, .portfolio, .POR, .contact", { origin: "bottom" });
