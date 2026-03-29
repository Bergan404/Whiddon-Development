import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export function initTicker() {
  new Splide(".ticker", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 4,
    autoScroll: { speed: 0.5 },
    arrows: false,
    pagination: false,
  }).mount({ AutoScroll });
}
