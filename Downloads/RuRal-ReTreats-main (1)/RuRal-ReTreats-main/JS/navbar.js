document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll(".mobile-menu ul li a");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    menuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.remove("scrolled");
        }
    });
});
