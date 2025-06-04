import "@hotwired/turbo-rails"
import "./controllers"

// Optional: your smooth scroll logic can stay if it’s unrelated to the cookie banner
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }

            const nav = document.getElementById("navbar-links");
            if (nav && nav.classList.contains("show")) {
                nav.classList.remove("show");
            }
        });
    });
});
