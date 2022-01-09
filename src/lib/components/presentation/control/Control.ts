import WidgetStyleSheet from "../../../style/WidgetStyleSheet";
import Widget from "../../../widget/WIdget";

interface ControlState {
    next: boolean;
}

class Control extends Widget<ControlState> {

    protected setState = (): void => {
        this.state = {
            next: this.getAttribute("next") !== null,
        }
    }

    protected getStyle = () => WidgetStyleSheet.getStyleSheet([
        {
            rules: [
                {
                    selector: 'w-control button',
                    declarations: {
                        height: '100%',
                        color: 'white',
                        background: `rgba(0, 0, 0, 0.5)`,
                        fontSize: "16px"
                    }
                },
            ]
        }
    ])

    protected setContent = (): void => {
        const control = document.createElement("button");
        control.textContent = this.state.next ? ">" : "<";
        this.append(control);
    }

}

export default Control;