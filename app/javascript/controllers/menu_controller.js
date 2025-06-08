import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["menu", "button", "overlay"];

    toggle() {
        this.menuTarget.classList.toggle("open");
        this.buttonTarget.classList.toggle("open");
        this.overlayTarget.classList.toggle("open");
        document.body.classList.toggle("menu-open");

        const isMobile = window.innerWidth <= 768;
        const links = this.menuTarget.querySelectorAll("a");
        if (!isMobile) return;

        if (this.menuTarget.classList.contains("open")) {
            links.forEach((link, i) =>
                setTimeout(() => {
                    link.classList.remove("pack");
                    link.classList.add("unpack");
                }, i * 100)
            );
        } else {
            links.forEach((link, i) =>
                setTimeout(() => {
                    link.classList.remove("unpack");
                    link.classList.add("pack");
                }, i * 50)
            );
        }
    }
}
