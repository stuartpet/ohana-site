import { Application } from "@hotwired/stimulus"
import CookieBannerController from "./cookie_banner_controller"
import MenuController from "./menu_controller"
import Scroll_controller from "./scroll_controller";
import Video_reload_controller from "./video_reload_controller";

const application = Application.start()
application.register("cookie-banner", CookieBannerController)
application.register("menu", MenuController)
application.register("scroll", Scroll_controller)
application.register("video-reload", Video_reload_controller)
// register others...