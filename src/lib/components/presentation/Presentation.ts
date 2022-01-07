import WidgetStyleSheet from "../../style/WidgetStyleSheet";

interface PresentationState {
    id: string,
    style: { [key: string]: string },
    animation: { [key: string]: string },
    transition: { [key: string]: string },
}

class Presentation extends HTMLElement {

    private state: PresentationState;

    private setState(): void {
        this.state = {
            id: this.getAttribute("id"),
            style: {
                bg: this.getAttribute("bg"),
                width: this.getAttribute("w"),
                height: this.getAttribute("h"),
            },
            animation: {
                side: this.getAttribute("side") ?? 'left'
            },
            transition: {
                name: this.getAttribute("transition"),
                duration: this.getAttribute("duration") ?? "0.5",
            }
        }
    }

    private getSelector = (): string => `#${this.state.id}`

    private getAnimationName = (): string => `${this.state.transition.name}-${this.state.id}`;

    private getBackground = (): string => {
        if (this.state.style.bg.startsWith("http") || this.state.style.bg.startsWith("."))
            return `url("${this.state.style.bg}")`;
        return this.state.style.bg;
    }

    private getPresentationStyle = (): WidgetStyleSheet.Rule => ({
        selector: this.getSelector(),
        declarations: {
            background: this.getBackground(),
            width: `${this.state.style.width}px`,
            height: `${this.state.style.height}px`,
        }
    })

    private getSlideStyle = (): WidgetStyleSheet.Rule[] => [
        {
            selector: `${this.getSelector()} widget-slide[active]`,
            declarations: {
                animation: `${this.getAnimationName()} ${this.state.transition.duration}s`
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

    private getRootStyle = () => WidgetStyleSheet.getStyleTag(`presentation-style-${this.getAttribute("id")}`, [
        {
            rules: [
                this.getPresentationStyle(),
                ...this.getSlideStyle()
            ],
            keyframes: this.getKeyframes(),
        }
    ]);

    private appendStyle() {
        document.head.appendChild(this.getRootStyle());
    }

    private modifyChild(index: number, active: number) {
        const child = this.children.item(index);
        if (index === active)
            child.setAttribute("active", "true");
        else
            child.removeAttribute("active");

        child.addEventListener("click", () => this.modifyChildren(index + 1));
    }

    modifyChildren(active: number) {
        [...this.children].forEach((_, i) => {
            this.modifyChild(i, active);
        });
        this.replaceChildren(...this.children);
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