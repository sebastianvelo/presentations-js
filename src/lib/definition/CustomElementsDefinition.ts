import Presentation from "../components/presentation/Presentation";
import Slide from "../components/presentation/body/slide/Slide";
import Row from "../components/style/row/Row";
import PresentationBody from "../components/presentation/body/PresentationBody";
import Control from "../components/presentation/control/Control";

const defineElements = () => {
    window.customElements.define("w-row", Row);
    window.customElements.define("w-presentation", Presentation);
    window.customElements.define("w-presentation-body", PresentationBody);
    window.customElements.define("w-control", Control);
    window.customElements.define("w-slide", Slide);
}

export default defineElements;