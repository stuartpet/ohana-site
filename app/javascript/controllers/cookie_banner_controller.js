import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        console.log("✅ CookieBannerController connected");

        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            this.element.style.display = "flex";
        }
    }

    accept() {
        console.log("✅ Accept clicked");
        localStorage.setItem("cookieConsent", "accepted");
        this.element.style.display = "none";
    }

    decline() {
        console.log("✅ Decline clicked");
        localStorage.setItem("cookieConsent", "declined");
        this.element.style.display = "none";
    }

    // ✅ Add this for debugging
    debugLog() {
        alert("Stimulus is wired up properly ✅");
        console.log("✅ debugLog triggered");
    }
}
