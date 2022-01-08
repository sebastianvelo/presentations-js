interface ControlState {
    next: boolean;
}

class Control extends HTMLElement {

    private state: ControlState;

    private setState = (): void => {
        this.state = {
            next: this.getAttribute("next") !== null,
        }
    }

    private setContent = (): void => {
        const control = document.createElement("button");
        control.textContent = this.state.next ? ">" : "<";
        this.append(control);
    }

    connectedCallback() {
        this.setState();
        this.setContent();
    }
}

export default Control;