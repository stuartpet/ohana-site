import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["dots"] // optional: if using scroll dots

    connect() {
        this.sections = [...document.querySelectorAll("section[id]")]
        this.links = [...document.querySelectorAll(".navbar-links a[href*='#']")]

        this.handleScroll = this.updateActiveLink.bind(this)
        window.addEventListener("scroll", this.handleScroll)
        this.updateActiveLink()
    }

    disconnect() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    updateActiveLink() {
        let current = ""

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight
            if (pageYOffset >= sectionTop - sectionHeight / 2) {
                current = section.getAttribute("id")
            }
        })

        this.links.forEach(link => {
            const href = link.getAttribute("href")
            if (href.includes(`#${current}`)) {
                link.classList.add("active")
            } else {
                link.classList.remove("active")
            }
        })
    }
}
