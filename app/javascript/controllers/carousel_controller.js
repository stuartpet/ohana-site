import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["track", "slide", "dots"]

    connect() {
        this.index = 0
        this.setupDots()
        this.startAutoScroll()
    }

    setupDots() {
        this.dotsTarget.innerHTML = ""
        this.slideTargets.forEach((_, i) => {
            const dot = document.createElement("button")
            dot.addEventListener("click", () => this.showSlide(i))
            this.dotsTarget.appendChild(dot)
        })
        this.updateDots()
    }

    showSlide(index) {
        const offset = index * this.slideTargets[0].offsetWidth
        this.trackTarget.style.transform = `translateX(-${offset}px)`
        this.index = index
        this.updateDots()
    }

    updateDots() {
        Array.from(this.dotsTarget.children).forEach((dot, i) => {
            dot.classList.toggle("active", i === this.index)
        })
    }

    startAutoScroll() {
        this.timer = setInterval(() => {
            const next = (this.index + 1) % this.slideTargets.length
            this.showSlide(next)
        }, 4000)
    }

    disconnect() {
        clearInterval(this.timer)
    }
}
