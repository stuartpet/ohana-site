import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const consent = sessionStorage.getItem("cookieConsent");
        if (!consent) {
            this.element.style.display = "block";
        }
    }

    accept() {
        sessionStorage.setItem("cookieConsent", "accepted");
        this.element.style.display = "none";
    }

    decline() {
        sessionStorage.setItem("cookieConsent", "declined");
        this.element.style.display = "none";
    }
}
