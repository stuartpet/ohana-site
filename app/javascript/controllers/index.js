import { Application } from "@hotwired/stimulus"
import CookieBannerController from "./cookie_banner_controller"
import MenuController from "./menu_controller"
import Video_reload_controller from "./video_reload_controller";
import Fade_controller from "./fade_controller";
import ScrollCardsController from "./scroll_cards_controller"
import CarouselController from "./carousel_controller"
import Scroll_indicator_controller from "./scroll_indicator_controller"

const application = Application.start()
application.register("cookie-banner", CookieBannerController)
application.register("menu", MenuController)
application.register("video-reload", Video_reload_controller)
application.register("fade", Fade_controller)
application.register("scroll-cards", ScrollCardsController)
application.register("carousel", CarouselController)
application.register("scroll-indicator", Scroll_indicator_controller)

application.debug = false
window.Stimulus = { app: application }

export { application }
// register others...