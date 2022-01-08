class PresentationBody extends HTMLElement {

    private modifyChild = (index: number, active: number): void => {
        const child = this.children.item(index);

        if (index === active)
            child.setAttribute("active", "true");
        else
            child.removeAttribute("active");

        child.addEventListener("click", () => this.modifyChildren(index + 1));
    }

    private modifyChildren = (active: number): void => {
        [...this.children].forEach((_, i) => {
            this.modifyChild(i, active);
        });
        this.replaceChildren(...this.children);
    }

    connectedCallback() {
        setTimeout(() => {
            this.modifyChildren(0);
        })
    }
}

export default PresentationBody;