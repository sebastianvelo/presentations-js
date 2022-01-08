import { getRootStyle } from "../../shared/RootStyle";
import StyleAttributes from "../../shared/StyleAttributes";
import StyleUnits from "../../shared/StyleUnits";
import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import StyleUtils from "../../utils/StyleUtils";
import Utils from "../../utils/Utils";

interface PresentationState {
    id: string,
    active: number,
    style: { [key: string]: string },
    animation: { [key: string]: string },
    transition: { [key: string]: string },
}

class Presentation extends HTMLElement {

    private state: PresentationState;

    private setState = (): void => {
        this.state = {
            id: this.getAttribute("id"),
            active: 0,
            style: {
                bg: this.getAttribute(StyleAttributes.Background),
                width: this.getAttribute(StyleAttributes.Width),
                height: this.getAttribute(StyleAttributes.Height),
            },
            animation: {
                side: this.getAttribute(StyleAttributes.AnimationSide)
            },
            transition: {
                name: this.getAttribute(StyleAttributes.TransitionName),
                duration: this.getAttribute(StyleAttributes.TransitionDuration) ?? "0.5",
            }
        }
    }

    private getPresentationSelector = (): string => Utils.getIDSelector(this.state.id);
    private getSlideSelector = (): string => `${this.getPresentationSelector()} w-slide[active]`;
    private getAnimationName = (): string => `${this.state.transition.name}-${this.state.id}`;
    private getAnimation = (): string => `${this.getAnimationName()} ${this.state.transition.duration}s`;
    private getPresentationStyle = (): WidgetStyleSheet.Rule => ({
        selector: this.getPresentationSelector(),
        declarations: {
            background: StyleUtils.getBackground(this.state.style.bg),
            width: StyleUtils.getValueUnit(this.state.style.width, StyleUnits.PX),
            height: StyleUtils.getValueUnit(this.state.style.height, StyleUnits.PX),
        }
    })
    private getSlideStyle = (): WidgetStyleSheet.Rule => (
        {
            selector: this.getSlideSelector(),
            declarations: {
                animation: this.getAnimation(),
            }
        }
    );
    private getKeyframes = (): WidgetStyleSheet.Keyframe[] => [
        {
            name: this.getAnimationName(),
            steps: [
                {
                    selector: "from",
                    declarations: {
                        [this.state.animation.side]: '100%'
                    }
                },
                {
                    selector: "to",
                    declarations: {
                        [this.state.animation.side]: '0'
                    }
                },
            ]
        }
    ]
    private getStyle = (): string => WidgetStyleSheet.getStyleSheet([
        {
            rules: [
                this.getPresentationStyle(),
                this.getSlideStyle()
            ],
            keyframes: this.getKeyframes(),
        }
    ]);
    private appendStyle = (): void => getRootStyle().append(this.getStyle());

    private getBody = () => this.children[1];

    private getSlidesCount = (): number => this.getBody().children.length - 1;

    private changeSlide = (next: boolean): void => {
        if (next) {
            if (this.state.active === this.getSlidesCount())
                this.state.active = 0;
            else
                this.state.active++;
        } else {
            if (this.state.active === 0)
                this.state.active = this.getSlidesCount();
            else
                this.state.active--;
        }
        this.getBody().setAttribute("slide", `${this.state.active}`);
    }

    private getControl = (next: boolean) => {
        const control = document.createElement("w-control");
        next && control.setAttribute("next", '');
        !next && control.setAttribute("prev", '');
        control.addEventListener("click", () => this.changeSlide(next))
        return control;
    }

    private setContent = () => {
        this.replaceChildren(this.getControl(false), ...this.children, this.getControl(true));
    }

    connectedCallback() {
        setTimeout(() => {
            this.setState();
            this.appendStyle();
            this.setContent();
        });
    }
}

export default Presentation;