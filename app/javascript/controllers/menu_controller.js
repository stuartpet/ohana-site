import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["links", "icon"]

    toggle() {
        this.linksTarget.classList.toggle("open")
        this.iconTarget.classList.toggle("open")
    }
}
