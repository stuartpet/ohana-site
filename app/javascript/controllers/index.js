import { Application } from "@hotwired/stimulus"
const application = Application.start()

const controllers = import.meta.glob("./**/*.controller.js", { eager: true })

for (const path in controllers) {
    const identifier = path
        .split("/")
        .pop()
        .replace(".controller.js", "")
    application.register(identifier, controllers[path].default)
}
