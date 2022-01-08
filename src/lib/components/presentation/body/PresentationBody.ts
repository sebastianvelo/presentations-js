interface PresentationBodyState {
    slideActive?: number;
}

class PresentationBody extends HTMLElement {
    private state: PresentationBodyState;

    static get observedAttributes() {
        return ["slide"];
    }

    private init = () => {
        this.setState();
        this.modifyChildren(this.state.slideActive);
    }

    private setState = () => {
        this.state = {
            slideActive: +this.getAttribute("slide")
        }
    };

    private modifyChild = (index: number, slideActive: number): void => {
        const child = this.children.item(index);
        if (index === slideActive)
            child.setAttribute("active", "");
        else
            child.removeAttribute("active");
    };

    private modifyChildren = (active: number): void => {
        setTimeout(() => {
            [...this.children].forEach((_, i) => {
                this.modifyChild(i, active);
            });
            this.replaceChildren(...this.children);
        })
    };

    attributeChangedCallback() {
        this.init();
    }

    connectedCallback() {
        this.init();
    }
}

export default PresentationBody;