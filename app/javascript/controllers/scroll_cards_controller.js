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

        if (target && target.closest(".horizontal-scroll")) {
            event.preventDefault()
            target.scrollIntoView({ behavior: "smooth", inline: "start" })
        }
    }
}
