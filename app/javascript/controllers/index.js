import { Application } from "@hotwired/stimulus"

import CookieBannerController from "./cookie_banner_controller"
import HelloController from "./hello_controller"
// import any others manually here...

const application = Application.start()

application.register("cookie-banner", CookieBannerController)
application.register("hello", HelloController)
// register others...
