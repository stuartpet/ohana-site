import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["menu", "button", "overlay"]

    connect() {
        // auto-close when clicking overlay or link
        this.overlayTarget.addEventListener("click", () => this.close())
        this.menuTarget.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => this.close())
        })
    }

    toggle() {
        this.menuTarget.classList.toggle("open")
        this.buttonTarget.classList.toggle("open")
        this.overlayTarget.classList.toggle("open")
        document.body.classList.toggle("menu-open")
    }

    close() {
        this.menuTarget.classList.remove("open")
        this.buttonTarget.classList.remove("open")
        this.overlayTarget.classList.remove("open")
        document.body.classList.remove("menu-open")
    }
}
