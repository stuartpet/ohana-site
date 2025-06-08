import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["links", "button"]

    toggle() {
        this.linksTarget.classList.toggle("open")
        this.buttonTarget.classList.toggle("open")
        document.body.classList.toggle("menu-open")

        const isMobile = window.innerWidth <= 768
        const links = this.linksTarget.querySelectorAll("a")

        if (!isMobile) return // Exit early on desktop — no unpack/pack logic

        if (this.linksTarget.classList.contains("open")) {
            links.forEach((link, i) => {
                setTimeout(() => {
                    link.classList.remove("pack")
                    link.classList.add("unpack")
                }, i * 100)
            })
        } else {
            links.forEach((link, i) => {
                setTimeout(() => {
                    link.classList.remove("unpack")
                    link.classList.add("pack")
                }, i * 50)
            })
        }
    }
}
