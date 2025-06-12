import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, { threshold: 0.5 })

        this.element.querySelectorAll('.scroll-card').forEach(card => {
            observer.observe(card)
        })
    }
}
