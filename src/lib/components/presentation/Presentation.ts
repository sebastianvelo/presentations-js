import StyleAttributes from "../../shared/StyleAttributes";
import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import Widget from "../../widget/WIdget";
import PresentationUtils from "./PresentationUtils";

export interface PresentationState {
    id: string,
    active: number,
    hideControls: boolean;
    autoplay: number;
    style: { [key: string]: string },
    animation: { [key: string]: string },
    transition: { [key: string]: string },
}

class Presentation extends Widget<PresentationState> {

    protected setState = (): void => {
        this.state = {
            id: this.getAttribute("id"),
            active: 0,
            hideControls: this.getAttribute("hideControls") !== null,
            autoplay: +this.getAttribute("autoplay"),
            style: {
                bg: this.getAttribute(StyleAttributes.Background),
                width: this.getAttribute(StyleAttributes.Width),
                height: this.getAttribute(StyleAttributes.Height),
            },
            animation: {
                side: this.getAttribute(StyleAttributes.AnimationSide) === 'x' ? 'left' : 'top',
            },
            transition: {
                name: this.getAttribute(StyleAttributes.TransitionName),
                duration: this.getAttribute(StyleAttributes.TransitionDuration) ?? "0.5",
            }
        }
    }

    protected getStyle = (): string => WidgetStyleSheet.getStyleSheet([
        {
            rules: [
                PresentationUtils.getPresentationStyle(this.state),
                PresentationUtils.getSlideStyle(this.state)
            ],
        }
    ]);

    protected setContent = () => {
        this.replaceChildren(this.getControl(false), ...this.children, this.getControl(true));
    }

    protected onInit = () => {
        this.autoplay();
    }

    private autoplay = () => {
        if (this.state.autoplay)
            setInterval(() => this.changeSlide(true), this.state.autoplay * 1000);
    }

    private getBody = () => this.children[1];

    private setActiveSlide = () => this.getBody().children[this.state.active].scrollIntoView({ block: "start", behavior: "smooth" });

    private getSlidesCount = (): number => this.getBody().children.length - 1;

    private changeSlide = (next: boolean): void => {
        this.state.active = next ?
            PresentationUtils.getNext(this.state, this.getSlidesCount()) :
            PresentationUtils.getPrev(this.state, this.getSlidesCount());
        this.setActiveSlide();
    }

    private getControl = (next: boolean) => {
        const control = document.createElement("w-control");
        next && control.setAttribute("next", '');
        !next && control.setAttribute("prev", '');
        control.addEventListener("click", () => this.changeSlide(next));
        control.style.display = this.state.hideControls ? 'none' : 'initial';
        return control;
    }

}

export default Presentation;