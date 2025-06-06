import "@hotwired/turbo-rails"
import "./controllers"

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }

            const nav = document.getElementById("navbar-links");
            if (nav && window.innerWidth < 768) {
                nav.classList.remove("open");
            }
        });
    });

    // Hamburger menu toggle logic
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("navbar-links");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            menu.classList.toggle("open");
        });
    }

    // Cookie banner logic
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        const acceptBtn = banner.querySelector("button.accept");
        const declineBtn = banner.querySelector("button.decline");

        if (!localStorage.getItem("cookieConsent")) {
            banner.style.display = "flex";
        }

        if (acceptBtn) {
            acceptBtn.addEventListener("click", () => {
                localStorage.setItem("cookieConsent", "accepted");
                banner.style.display = "none";
            });
        }

        if (declineBtn) {
            declineBtn.addEventListener("click", () => {
                localStorage.setItem("cookieConsent", "declined");
                banner.style.display = "none";
            });
        }
    }
});
