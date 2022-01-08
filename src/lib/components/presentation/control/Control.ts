import UnstyledWidget from "../../../widget/UnstyledWidget";

interface ControlState {
    next: boolean;
}

class Control extends UnstyledWidget<ControlState> {

    protected setState = (): void => {
        this.state = {
            next: this.getAttribute("next") !== null,
        }
    }

    protected setContent = (): void => {
        const control = document.createElement("button");
        control.textContent = this.state.next ? ">" : "<";
        this.append(control);
    }

}

export default Control;