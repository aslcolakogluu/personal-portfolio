/* ============================= */
/* Navbar Show / Hide on Scroll */
/* ============================= */

const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Aşağı kaydırırken gizle
    if (currentScroll > lastScrollY && currentScroll > 100) {
        header.style.top = "-120px";
    } 
    // Yukarı kaydırırken göster
    else {
        header.style.top = "0";
    }

    lastScrollY = currentScroll;
});


/* ============================= */
/* Mobile Menu Toggle */
/* ============================= */

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});


/* ============================= */
/* Close Mobile Menu on Scroll */
/* ============================= */

window.addEventListener("scroll", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
});


/* ============================= */
/* ScrollReveal Animations */
/* ============================= */

const sr = ScrollReveal({
    distance: "30px",
    duration: 800,
    delay: 150,
    reset: false
});

sr.reveal(".home-text", { origin: "bottom" });
sr.reveal(
    ".about, .experience, .skills, .achievement, .portfolio, .POR, .contact",
    { origin: "bottom" }
);
