import { getRootStyle } from "../../shared/RootStyle";
import StyleAttributes from "../../shared/StyleAttributes";
import StyleUnits from "../../shared/StyleUnits";
import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import StyleUtils from "../../utils/StyleUtils";
import Utils from "../../utils/Utils";

interface PresentationState {
    id: string,
    style: { [key: string]: string },
    animation: { [key: string]: string },
    transition: { [key: string]: string },
}

class Presentation extends HTMLElement {

    private state: PresentationState;

    private setState = (): void => {
        this.state = {
            id: this.getAttribute("id"),
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

    private getSlideSelector = (): string => `${this.getPresentationSelector()} widget-slide[active]`;

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

    private getSlideStyle = (): WidgetStyleSheet.Rule[] => [
        {
            selector: this.getSlideSelector(),
            declarations: {
                animation: this.getAnimation(),
            }
        }
    ]

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
                ...this.getSlideStyle()
            ],
            keyframes: this.getKeyframes(),
        }
    ]);

    private appendStyle = (): void => getRootStyle().append(this.getStyle());


    private getCounter = (active: number) => {
        return `${active + 1}/${this.children.length}`;
    }

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
        this.replaceChildren(...this.children, this.getCounter(active));
    }

    connectedCallback() {
        this.setState();
        this.appendStyle();
        setTimeout(() => {
            this.modifyChildren(0);
        })
    }
}

export default Presentation;