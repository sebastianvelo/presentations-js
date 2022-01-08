import Presentation from "../components/presentation/Presentation";
import Slide from "../components/slide/Slide";
import Row from "../components/style/row/Row";

const defineElements = () => {
    window.customElements.define("widget-row", Row);
    window.customElements.define("widget-presentation", Presentation);
    window.customElements.define("widget-slide", Slide);
}

export default defineElements;