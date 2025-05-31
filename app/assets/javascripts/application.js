document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

            // Optional: close mobile menu if open
            const nav = document.getElementById("navbar-links");
            if (nav && nav.classList.contains("show")) {
                nav.classList.remove("show");
            }
        });
    });
});
