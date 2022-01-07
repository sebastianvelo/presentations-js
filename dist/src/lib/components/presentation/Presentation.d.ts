declare class Presentation extends HTMLElement {
    private state;
    private setState;
    private getAnimationName;
    private getSelector;
    private getBackground;
    private getPresentationStyle;
    private getSlideStyle;
    private getKeyframes;
    private getRootStyle;
    private setStyle;
    private modifyChild;
    modifyChildren(active: number): void;
    connectedCallback(): void;
}
export default Presentation;
