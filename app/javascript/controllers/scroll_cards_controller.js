// controllers/scroll_cards_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        this.boundHandler = this.handleClick.bind(this)
        this.removeAllListeners()
        document.querySelectorAll('a[href*="#"]').forEach(link => {
            link.addEventListener("click", this.boundHandler)
        })
    }

    disconnect() {
        this.removeAllListeners()
    }

    removeAllListeners() {
        document.querySelectorAll('a[href*="#"]').forEach(link => {
            link.removeEventListener("click", this.boundHandler)
        })
    }

    handleClick(event) {
        const link = event.currentTarget
        const href = link.getAttribute("href")
        const id = href.split("#")[1]
        const target = document.getElementById(id)

        if (target) {
            event.preventDefault()
            target.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
            const offset = 100 // adjust this to match your navbar height
            const elementTop = target.getBoundingClientRect().top + window.scrollY
            const offsetTop = elementTop - offset

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })

            // Also close the menu if we're on mobile
            const overlay = document.querySelector(".mobile-menu-overlay")
            const menu = document.querySelector(".navbar-links")
            const burger = document.querySelector(".burger-menu")

            if (burger && getComputedStyle(burger).display !== "none") {
                menu.classList.remove("open")
                burger.classList.remove("open")
                overlay.classList.remove("open")
                document.body.classList.remove("menu-open")
            }
        }
    }
}
