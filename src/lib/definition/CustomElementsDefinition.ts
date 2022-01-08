import Presentation from "../components/presentation/Presentation";
import Slide from "../components/presentation/body/slide/Slide";
import Row from "../components/style/row/Row";
import PresentationBody from "../components/presentation/body/PresentationBody";

const defineElements = () => {
    window.customElements.define("w-row", Row);
    window.customElements.define("w-presentation", Presentation);
    window.customElements.define("w-presentation-body", PresentationBody);
    window.customElements.define("w-slide", Slide);
}

export default defineElements;