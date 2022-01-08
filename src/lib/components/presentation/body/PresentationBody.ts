import UnstyledWidget from "../../../widget/UnstyledWidget";
import Widget from "../../../widget/WIdget";

interface PresentationBodyState {
    slideActive?: number;
}

class PresentationBody extends UnstyledWidget<PresentationBodyState> {

    static get observedAttributes() {
        return ["slide"];
    }

    protected setState = () => {
        this.state = {
            slideActive: +this.getAttribute("slide")
        }
    };

    protected onInit = () => {
        this.modifyChildren(this.state.slideActive);
    }

    private modifyChild = (index: number, slideActive: number): void => {
        const child = this.children.item(index);
        if (index === slideActive)
            child.setAttribute("active", "");
        else
            child.removeAttribute("active");
    };

    private modifyChildren = (slideActive: number): void => {
        [...this.children].forEach((_, i) => {
            this.modifyChild(i, slideActive);
        });
        this.replaceChildren(...this.children);
    };

    attributeChangedCallback() {
        this.setState();
        this.onInit();
    }

}

export default PresentationBody;