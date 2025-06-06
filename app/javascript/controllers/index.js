import { Application } from "@hotwired/stimulus"
import CookieBannerController from "./cookie_banner_controller"

const application = Application.start()
application.register("cookie-banner", CookieBannerController)
// register others...
